import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables from your .env file
dotenv.config();

export default async (req, res) => {
    // Only accept POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    // Log received data for debugging
    console.log('Received contact form submission:', JSON.stringify(req.body));

    // Destructure and rename fields from the form submission
    const {
        contact__email: email,
        contact__fname: fname,
        contact__lname: lname,
        contact__company: company,
        contact__message: message
    } = req.body;

    // Logging destructured data to verify accuracy
    console.log(`Destructured Data - Email: ${email}, Name: ${fname} ${lname}, Company: ${company}, Message: ${message}`);

    // Set up Nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER, // Gmail address from environment variable
            pass: process.env.GMAIL_PASS  // Gmail App Password from environment variable
        }
    });

    // Define mail options for Nodemailer
    const mailOptions = {
        from: process.env.GMAIL_USER,  // Sender address from environment variable
        to: process.env.GMAIL_USER,    // Recipient address (can be any email, not just GMAIL_USER)
        subject: 'New Contact Form Submission',
        html: `<p>You have a new contact form submission:</p>
               <strong>Name:</strong> ${fname} ${lname}<br>
               <strong>Email:</strong> ${email}<br>
               <strong>Company:</strong> ${company}<br>
               <strong>Message:</strong> ${message}`
    };

    try {
        // Attempt to send the email
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.messageId);
        res.status(200).send('Email sent successfully');
    } catch (err) {
        // Log and respond with the error
        console.error('Error sending email:', err);
        res.status(500).json({ error: 'Failed to send email', details: err.message });
    }
};
