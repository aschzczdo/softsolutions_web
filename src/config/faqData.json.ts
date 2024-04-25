export interface FaqItem {
  question: string; // this is the question of the accordion
  answer: string; // these are the details seen after expanding the accordion
}

export const faqData: FaqItem[] = [
  {
    question: "What services does SoftSolutions offer?",
    answer: `SoftSolutions specializes in custom web development and software application services, designed to meet each client's unique needs. We also provide comprehensive maintenance and social network management to enhance your SEO and digital presence, ensuring your business achieves its full digital potential.`,
  },
  {
    question: "How can SoftSolutions help digitalize my company?",
    answer: `Our expert team at SoftSolutions leverages cutting-edge technologies to transform your business operations digitally. From developing bespoke websites to creating efficient software solutions and managing your social media presence, we cover all aspects to ensure a smooth digital transition.`,
  },
  {
    question: "What makes SoftSolutions unique in web development?",
    answer: `At SoftSolutions, our approach to web development is fully customized. We don't just build websites; we create tailored solutions that integrate seamlessly with your business processes, helping to enhance functionality and drive engagement.`,
  },
  {
    question: "Can SoftSolutions handle both front-end and back-end development?",
    answer: `Yes, our team is proficient in both front-end and back-end development, ensuring a full-stack solution. Whether you need a visually appealing front-end interface or complex back-end processes, we have the expertise to deliver comprehensive and robust applications.`,
  },
  {
    question: "What support does SoftSolutions offer post-development?",
    answer: `SoftSolutions provides ongoing support and maintenance services to ensure your applications and websites run smoothly and remain updated. Our support includes regular updates, security patches, and performance checks, along with timely troubleshooting and assistance.`,
  },
  {
    question: "How does SoftSolutions enhance my company's digital presence?",
    answer: `We use strategic social network management and SEO techniques to elevate your online visibility. Our services ensure that your brand not only gains exposure but also builds a significant digital footprint, attracting more traffic and engagement.`,
  },
];

export default faqData;
