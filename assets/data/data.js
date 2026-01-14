// Données des slides
export const slides = [
  {
    id: 1,
    image: "/img/slider2.jpg",
    title: "Global Health Choice Services",
    subtitle: "Global <span>Health</span> Choice Services",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl pellentesque, faucibus libero eu, gravida quam.",
    buttons: [{ text: "Contact Us", url: "/contact", variant: "primary" }],
  },
  {
    id: 2,
    image: "/img/slider.jpg",
    title: "We Provide Medical Services That You Can Trust!",
    subtitle:
      "We Provide <span>Medical</span> Services That You Can <span>Trust!</span>",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl pellentesque, faucibus libero eu, gravida quam.",
    buttons: [
      { text: "Get Appointment", url: "/appointment", variant: "default" },
      { text: "About Us", url: "/about", variant: "primary" },
    ],
  },
  {
    id: 3,
    image: "/img/slider3.jpg",
    title: "We Provide Medical Services That You Can Trust!",
    subtitle:
      "We Provide <span>Medical</span> Services That You Can <span>Trust!</span>",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl pellentesque, faucibus libero eu, gravida quam.",
    buttons: [
      { text: "Get Appointment", url: "/appointment", variant: "default" },
      { text: "Contact Now", url: "/contact", variant: "primary" },
    ],
  },
];

// Données de la section About
export const aboutData = [
    { title: "We Offer Different Services To Patient",
      subtitle: "About Global Health Choice",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra antege vel est lobortis, a commodo magna rhoncus. In quis nisi non emet quam pharetra commodo.",
      detailedDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
]

export const servicesData = [{
  title: "Our Services",
  subtitle:
    "Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts",
  sectionImage: "/img/section-img.png",

  services: [
    {
      id: 1,
      title: "Personal Care",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      image:
        "https://img.freepik.com/premium-photo/help-support-medical-with-nurse-old-man-retirement-rehabilitation-healing-empathy-physical-therapy-healthcare-with-patient-black-woman-nursing-home-caregiver-service_590464-124294.jpg",
      alt: "Personal Care service",
      link: "/services/skilled-nursing",
      date: null, // "22 Aug, 2020" si vous voulez ajouter des dates
      icon: "fa fa-user-nurse",
      category: "Medical Care",
    },
    {
      id: 2,
      title: "PHYSICAL THERAPY",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      image:
        "https://img.freepik.com/premium-photo/male-health-worker-with-clipboard-discussing-with-caucasian-senior-woman-medication-dose_13339-332911.jpg",
      alt: "Physical therapy service",
      link: "/services/physical-therapy",
      date: null, // "15 Jul, 2020"
      icon: "fa fa-hand-holding-medical",
      category: "Rehabilitation",
    },
    {
      id: 3,
      title: "OCCUPATIONAL THERAPY",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      image:
        "https://img.freepik.com/premium-photo/senior-man-volunteer-nurse-support-caregiver-help-with-elderly-medical-nursing-home-smile-happy-trust-community-employee-working-healthcare-charity-house-interior-living-room_590464-85939.jpg",
      alt: "Occupational therapy service",
      link: "/services/occupational-therapy",
      date: null, // "05 Jan, 2020"
      icon: "fa fa-hands-helping",
      category: "Rehabilitation",
    },
    {
      id: 4,
      title: "SPEECH THERAPY",
      description:
        "Professional speech therapy services for rehabilitation and communication improvement.",
      image: "/img/services/speech-therapy.jpg",
      alt: "Speech therapy service",
      link: "/services/speech-therapy",
      icon: "fa fa-comment-medical",
      category: "Rehabilitation",
    },
    {
      id: 5,
      title: "HOME HEALTH AIDE",
      description:
        "Comprehensive home health aide services for daily living assistance.",
      image: "/img/services/home-health-aide.jpg",
      alt: "Home health aide service",
      link: "/services/home-health-aide",
      icon: "fa fa-home-heart",
      category: "Home Care",
    },
    {
      id: 6,
      title: "MEDICAL SOCIAL WORK",
      description:
        "Support services for patients and families dealing with medical challenges.",
      image: "/img/services/social-work.jpg",
      alt: "Medical social work service",
      link: "/services/medical-social-work",
      icon: "fa fa-people-arrows",
      category: "Support Services",
    },
  ],

  // Configuration
  config: {
    itemsPerRow: 3,
    showCategories: false,
    showDates: false,
    showViewAllButton: true,
  },
}]

export const menuItems = [
  {
    id: "home",
    label: "Home",
    to: "/",
    active: true,
  },
  // {
  //   id: "about",
  //   label: "About Us",
  //   to: "/about",
  // },
  {
    id: "services",
    label: "Our Services",
    to: "/services",
    // submenu: [
    //   {
    //     id: "services-list",
    //     label: "Services",
    //     to: "/services",
    //   },
    //   {
    //     id: "service-details",
    //     label: "",
    //     to: "",
    //   },
    // ],
  },
  {
    id: "events",
    label: "Events",
    to: "/events",
    // submenu: [
    //   {
    //     id: "blog-grid",
    //     label: "Blog Grid",
    //     to: "/blog",
    //   },
    //   {
    //     id: "blog-single",
    //     label: "Blog Details",
    //     to: "/blog/single",
    //   },
    // ],
  },
  {
    id: "employment",
    label: "Employment",
    to: "/employment",
  },
  // {
  //   id: "newsletter",
  //   label: "Newsletter",
  //   to: "/newsletter",
  // },
];

export const contactInfo = {
  location: "Virginia, United States",
  phone: "+240 505 1675",
  email: "info@globalhealthchoice.com",
  phoneHref: "tel:+2405051675",
  emailHref: "mailto:info@globalhealthchoice.com",
  officeHours: "Mon - Fri : 9am- 6pm / Sat : 10am - 2pm",
};

export const logoConfig = {
  src: "/img/global-health-choice-final-variant.png",
  alt: "Global Health Choice Logo",
  width: "64px",
  height: "auto",
  companyName: {
    first: "Global",
    second: "Health Choice",
  },
};

export const ctaButton = {
  label: "Contact Us",
  to: "/contact",
  variant: "primary",
};

export const services = [
  {
    id: 1,
    title: "Personal Care",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    image:
      "https://img.freepik.com/premium-photo/help-support-medical-with-nurse-old-man-retirement-rehabilitation-healing-empathy-physical-therapy-healthcare-with-patient-black-woman-nursing-home-caregiver-service_590464-124294.jpg",
    alt: "Personal Care service",
    link: "/services/personal-care",
    date: null,
    category: "Pflege",
  },
  {
    id: 2,
    title: "In Home Support (DD/IDD)",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    image:
      "https://img.freepik.com/premium-photo/male-health-worker-with-clipboard-discussing-with-caucasian-senior-woman-medication-dose_13339-332911.jpg",
    alt: "In Home Support (DD/IDD) service",
    link: "/services/in-home-support",
    date: null,
    category: "Rehabilitation",
  },
  {
    id: 3,
    title: "ABA (Autism)",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    image:
      "https://img.freepik.com/premium-photo/senior-man-volunteer-nurse-support-caregiver-help-with-elderly-medical-nursing-home-smile-happy-trust-community-employee-working-healthcare-charity-house-interior-living-room_590464-85939.jpg",
    alt: "ABA (Autism) service",
    link: "/services/autism",
    date: null,
    category: "Rehabilitation",
  },
  {
    id: 4,
    title: "Respite Care",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    image:
      "https://img.freepik.com/premium-photo/senior-man-volunteer-nurse-support-caregiver-help-with-elderly-medical-nursing-home-smile-happy-trust-community-employee-working-healthcare-charity-house-interior-living-room_590464-85939.jpg",
    alt: "Respite Care service",
    link: "/services/respite-care",
    date: null,
    category: "Rehabilitation",
  },
  {
    id: 5,
    title: "Skilled nursing (pediatric & adults)",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    image:
      "https://img.freepik.com/premium-photo/senior-man-volunteer-nurse-support-caregiver-help-with-elderly-medical-nursing-home-smile-happy-trust-community-employee-working-healthcare-charity-house-interior-living-room_590464-85939.jpg",
    alt: "Skilled nursing (pediatric & adults) service",
    link: "/services/skilled-nursing",
    date: null,
    category: "Rehabilitation",
  },
  {
    id: 6,
    title: "Physical Therapy",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    image:
      "https://img.freepik.com/premium-photo/senior-man-volunteer-nurse-support-caregiver-help-with-elderly-medical-nursing-home-smile-happy-trust-community-employee-working-healthcare-charity-house-interior-living-room_590464-85939.jpg",
    alt: "Physical Therapy service",
    link: "/services/physical-therapy",
    date: null,
    category: "Rehabilitation",
  },
  {
    id: 7,
    title: "Occupational Therapy",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    image:
      "https://img.freepik.com/premium-photo/senior-man-volunteer-nurse-support-caregiver-help-with-elderly-medical-nursing-home-smile-happy-trust-community-employee-working-healthcare-charity-house-interior-living-room_590464-85939.jpg",
    alt: "Occupational Therapy service",
    link: "/services/occupational-therapy",
    date: null,
    category: "Rehabilitation",
  },
  {
    id: 8,
    title: "Speech Therapy",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    image:
      "https://img.freepik.com/premium-photo/senior-man-volunteer-nurse-support-caregiver-help-with-elderly-medical-nursing-home-smile-happy-trust-community-employee-working-healthcare-charity-house-interior-living-room_590464-85939.jpg",
    alt: "Speech Therapy service",
    link: "/services/speech-therapy",
    date: null,
    category: "Rehabilitation",
  },
];

export const quickLinks = [
  { text: "Skilled Nursing", url: "/services/skilled-nursing" },
  { text: "Occupational Therapy", url: "/services/occupational-therapy" },
  { text: "Home Health Aides", url: "/services/home-health-aides" },
  { text: "Physical Therapy", url: "/services/physical-therapy" },
  { text: "Medical Social Service", url: "/services/medical-social-service" },
  { text: "Clia Waived Labs", url: "/services/clia-waived-labs" },
];

export const socialLinks = [
  { platform: "facebook", url: "#", icon: "icofont-facebook" },
  { platform: "google-plus", url: "#", icon: "icofont-google-plus" },
  { platform: "twitter", url: "#", icon: "icofont-twitter" },
  { platform: "vimeo", url: "#", icon: "icofont-vimeo" },
  { platform: "pinterest", url: "#", icon: "icofont-pinterest" },
];

export const newsletter = [
    {
      title: "Sign up for newsletter",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      placeholder: "Your email address",
      buttonText: "Subscribe",
      formAction: "https://mediplus-html.vercel.app/mail/mail.php",
    },
];

export const scheduleCards = [
  {
    id: 1,
    title: "Set an Appointment",
    subtitle: "Lorem Amet",
    description:
      "Arrange a meeting with us to know how we can help your situation",
    icon: "icofont-prescription",
    link: "/appointment",
    variant: "first",
    type: "regular",
    columnClass: "col-lg-4 col-md-6 col-12",
    linkName: "Set Appointment",
  },
  {
    id: 2,
    title: "Send Your Referrals",
    subtitle: "Fusce Porttitor",
    description:
      "Spread your experience with us to others, and introduce us to them.",
    icon: "fa fa-user-plus",
    link: "/referrals",
    variant: "middle",
    type: "regular",
    columnClass: "col-lg-4 col-md-6 col-12",
    linkName: "Send Referral",
  },
  {
    id: 3,
    title: "Opening Hours",
    subtitle: "Donec luctus",
    description: null,
    icon: "icofont-ui-clock",
    link: "/opening-hours",
    variant: "last",
    type: "withHours",
    columnClass: "col-lg-4 col-md-12 col-12",
    linkName: "Our Location",
    openingHours: [
      {
        day: "Monday - Friday",
        hours: "9.00-18.00",
      },
      {
        day: "Saturday",
        hours: "10.00-12.00",
      },
      // {
      //   day: "Monday - Thursday",
      //   hours: "9.00-15.00",
      // },
    ],
  },
];