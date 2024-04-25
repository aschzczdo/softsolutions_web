export interface SiteDataProps {
  name: String;
  title: string;
  description: string;
  useViewTransitions?: boolean;
  useAnimations?: boolean;
  author: {
    name: string;
    email: string;
    twitter: string; // used for twitter cards when sharing a blog post on twitter
  };
  defaultImage: {
    src: string;
    alt: string;
  };
}

// Update this file with your site specific information
const siteData: SiteDataProps = {
  name: "SoftSolutions",
  // Your website's title and description (meta fields)
  title:
    "Softline Solutions - A Software Development Company in Spain | SoftSolutions",
  description:
    "Softline Solutions is a software development company in Spain that provides custom software development services, web development, automatization of process and more.",
  useViewTransitions: true,
  useAnimations: true,
  // Your information!
  author: {
    name: "SoftSolutions",
    email: "asanchez.czdo@gmail.com",
    twitter: "#",
  },

  // default image for meta tags if the page doesn't have an image already
  defaultImage: {
    src: "/images/cosmic-themes-logo.jpg",
    alt: "Cosmic Themes logo",
  },
};

export default siteData;
