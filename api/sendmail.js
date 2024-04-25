import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export default async (req, res) => {
    console.log('Received contact form submission:', JSON.stringify(req.body));

    // Destructure with the exact keys you expect from the payload
    const {
        contact__email: email,
        contact__fname: fname,
        contact__lname: lname,
        contact__company: company,
        contact__message: message
    } = req.body;

    // Log the values after destructuring to see what you got
    console.log(`Destructured Data - Email: ${email}, Name: ${fname} ${lname}, Company: ${company}, Message: ${message}`);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS
        }
    });

    const mailOptions = {
        from: process.env.GMAIL_USER,
        to: process.env.GMAIL_USER,  // Send to yourself or change as needed
        subject: 'New Contact Form Submission',
        html: `<p>You have a new contact form submission:</p>
               <strong>Name:</strong> ${fname} ${lname}<br>
               <strong>Email:</strong> ${email}<br>
               <strong>Company:</strong> ${company}<br>
               <strong>Message:</strong> ${message}`
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.messageId);
        res.status(200).send('Email sent successfully');
    } catch (err) {
        console.error('Error sending email:', err);
        res.status(500).send('Error sending email');
    }
};
