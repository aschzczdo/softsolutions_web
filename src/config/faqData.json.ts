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
    question: "¿Qué servicios ofrece SoftSolutions?",
    answer: `SoftSolutions se especializa en servicios de desarrollo web personalizados y aplicaciones de software, diseñados para satisfacer las necesidades únicas de cada cliente. También brindamos mantenimiento integral y gestión de redes sociales para mejorar su SEO y presencia digital, asegurando que su empresa alcance su máximo potencial digital.`,
  },
  {
    question: "¿Cómo SoftSolutions puede ayudar a mi empresa a digitalizarse?",
    answer: `SoftSolutions ofrece soluciones digitales personalizadas que se adaptan a las necesidades específicas de su empresa. Nuestros servicios de desarrollo web y aplicaciones de software están diseñados para mejorar la eficiencia y la productividad, permitiéndole aprovechar al máximo las oportunidades digitales y mantenerse competitivo en el mercado.`,
  },
  {
    question: "¿Ofreceis tanto desarrollo front-end como back-end?",
    answer: `Sí, nuestro equipo es competente tanto en el desarrollo front-end como en el back-end, garantizando una solución full-stack. Ya sea que necesite una interfaz front-end visualmente atractiva o procesos back-end complejos, tenemos la experiencia para ofrecer aplicaciones completas y robustas.`,
  },
  {
    question: "¿Qué mantenimiento y soporte ofrece SoftSolutions post-venta?",
    answer: `Ofrecemos servicios de mantenimiento y soporte continuos para garantizar que su aplicación o sitio web funcione sin problemas. Nuestro equipo de expertos está disponible para resolver problemas, realizar actualizaciones y brindar asistencia técnica en cualquier momento, asegurando que su solución digital esté siempre en óptimas condiciones.`,
  },
  {
    question: "¿Cómo SoftSolutions puede mejorar la visibilidad de mi marca en línea?",
    answer: `Utilizamos estrategias de SEO y gestión de redes sociales para mejorar la visibilidad de su marca en línea. Nuestros servicios de marketing digital están diseñados para aumentar el tráfico a su sitio web, mejorar su clasificación en los motores de búsqueda y aumentar la conciencia de la marca en línea, ayudándole a alcanzar a su audiencia objetivo y atraer nuevos clientes.`,
  },
  {
    question: "¿Por qué elegir SoftSolutions?",
    answer: "Somos una startup formada por gente joven con más de cuatro años de experiencia. Nos apasiona lo que hacemos por eso lo hacemos como lo hacemos. Nos esforzamos por ofrecer soluciones digitales innovadoras y de alta calidad que ayuden a nuestros clientes a alcanzar sus objetivos comerciales y a destacarse en el mercado."
  },
  {
    question: "¿Cómo puedo contactar con vosotros?",
    answer: "Arriba a la derecha puede observar un boton de contacto, al hacer click en él se le redirigirá a un formulario de contacto."
  },
];

export default faqData;
