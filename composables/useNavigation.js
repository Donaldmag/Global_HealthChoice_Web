export const useNavigation = () => {
  const menuItems = [
    {
      id: "home",
      label: "Home",
      to: "/",
      active: true,
    },
    {
      id: "about",
      label: "About Us",
      to: "/about",
    },
    {
      id: "services",
      label: "Our Services",
      to: "/services",
      submenu: [
        {
          id: "services-list",
          label: "Services",
          to: "/services",
        },
        {
          id: "service-details",
          label: "Service Details",
          to: "/services/details",
        },
      ],
    },
    {
      id: "events",
      label: "Events",
      to: "/events",
      submenu: [
        {
          id: "blog-grid",
          label: "Blog Grid",
          to: "/blog",
        },
        {
          id: "blog-single",
          label: "Blog Details",
          to: "/blog/single",
        },
      ],
    },
    {
      id: "employment",
      label: "Employment",
      to: "/employment",
    },
    {
      id: "newsletter",
      label: "Newsletter",
      to: "/newsletter",
    },
  ];

  const contactInfo = {
    location: "Virginia, United States",
    phone: "+240 505 1675",
    email: "info@globalhealthchoice.com",
    phoneHref: "tel:+2405051675",
    emailHref: "mailto:info@globalhealthchoice.com",
  };

  const logoConfig = {
    src: "/img/global-health-choice-final-variant.png",
    alt: "Global Health Choice Logo",
    width: "64px",
    height: "auto",
    companyName: {
      first: "Global",
      second: "Health Choice",
    },
  };

  const ctaButton = {
    label: "Contact Us",
    to: "/contact",
    variant: "primary",
  };

  const setActiveMenu = (menuId) => {
    menuItems.forEach((item) => {
      item.active = item.id === menuId;
    });
  };

  return {
    menuItems,
    contactInfo,
    logoConfig,
    ctaButton,
    setActiveMenu,
  };
};
