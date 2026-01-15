// Données des slides
export const slides = [
  {
    id: 1,
    image: "/img/slider-1.jpg",
    title: "Global Health Choice Services",
    subtitle: "Global <span>Health</span> Choice Services",
    description:
      "We provide personalized support for individuals with developmental disabilities, encouraging growth and dignity within the comfort of their own communities.",
    buttons: [{ text: "Find Our More", url: "/about", variant: "primary" }],
  },
  {
    id: 2,
    image:
      "/img/slider-2.jpg",
    title: "Empowering Independence with In-Home Support",
    subtitle: "Empowering Independence with In-Home Support",
    description:
      "Our compassionate team delivers exceptional, individualized care to ensure every patient feels supported, empowered, and valued throughout their journey.",
    buttons: [
      { text: "Get Appointment", url: "/appointment", variant: "primary" },
      // { text: "About Us", url: "/about", variant: "primary" },
    ],
  },
  // {
  //   id: 3,
  //   image: "/img/slider3.jpg",
  //   title: "We Provide Medical Services That You Can Trust!",
  //   subtitle:
  //     "We Provide <span>Medical</span> Services That You Can <span>Trust!</span>",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl pellentesque, faucibus libero eu, gravida quam.",
  //   buttons: [
  //     { text: "Get Appointment", url: "/appointment", variant: "default" },
  //     { text: "Contact Now", url: "/contact", variant: "primary" },
  //   ],
  // },
];

// Données de la section About
export const aboutData = [
    { title: "We Offer Different Services To Patient",
      subtitle: "About Global Health Choice",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra antege vel est lobortis, a commodo magna rhoncus. In quis nisi non emet quam pharetra commodo.",
      detailedDescription: ", when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
]

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
    description: "Dignified assistance with daily living activities",
    image:
      "https://img.freepik.com/premium-photo/home-nurse-old-man-with-water-tablets-medication-with-help-healthcare-illness-african-people-patient-caregiver-with-professional-wellness-medical-with-recovery-lounge_590464-468369.jpg",
    alt: "Personal Care service",
    link: "/services/personal-care",
    date: null,
    category: "Pflege",
  },
  {
    id: 2,
    title: "In Home Support (DD/IDD)",
    description:
      "Personalized assistance for individuals with disabilities to foster independence...",
    image:
      "https://img.freepik.com/premium-photo/social-worker-caring-about-man-with-disability_249974-14196.jpg",
    alt: "In Home Support (DD/IDD) service",
    link: "/services/in-home-support",
    date: null,
    category: "Rehabilitation",
  },
  {
    id: 3,
    title: "ABA (Autism)",
    description:
      "Evidence-based behavioral therapy focused on improving social, communication...",
    image:
      "https://img.freepik.com/premium-photo/excited-african-american-kid-child-psychotherapist-playing-with-bricks_116547-17364.jpg",
    alt: "ABA (Autism) service",
    link: "/services/autism",
    date: null,
    category: "Rehabilitation",
  },
  {
    id: 4,
    title: "Respite Care",
    description:
      "Temporary professional support that provides primary family caregivers with a vital break...",
    image:
      "https://img.freepik.com/premium-photo/female-doctor-consoling-senior-woman-bedroom-home_13339-369430.jpg",
    alt: "Respite Care service",
    link: "/services/respite-care",
    date: null,
    category: "Rehabilitation",
  },
  {
    id: 5,
    title: "Skilled nursing (pediatric & adults)",
    description: "Expert clinical medical care and monitoring provided...",
    image:
      "https://img.freepik.com/premium-photo/black-woman-nurse-caregiver-blood-pressure-elderly-care-healthcare-sofa-home-african-female-person-medical-professional-helping-monitoring-old-age-patient-living-room_590464-210329.jpg",
    alt: "Skilled nursing (pediatric & adults) service",
    link: "/services/skilled-nursing",
    date: null,
    category: "Rehabilitation",
  },
  {
    id: 6,
    title: "Physical Therapy",
    description:
      "Specialized exercises and treatments designed to improve mobility...",
    image:
      "https://img.freepik.com/premium-photo/physiotherapy-help-stretching-band-doctor-with-senior-man-physical-therapy-rehabilitation-healthcare-support-black-woman-chiropractor-physiotherapist-consulting-elderly-patient_590464-124328.jpg",
    alt: "Physical Therapy service",
    link: "/services/physical-therapy",
    date: null,
    category: "Rehabilitation",
  },
  {
    id: 7,
    title: "Occupational Therapy",
    description: "Therapeutic support to help patients master the daily...",
    image:
      "https://img.freepik.com/premium-photo/giving-crutches-curly-young-dark-haired-nurse-giving-crutches-aged-woman-wearing-glasses-after-leg-surgery_259150-46763.jpg",
    alt: "Occupational Therapy service",
    link: "/services/occupational-therapy",
    date: null,
    category: "Rehabilitation",
  },
  {
    id: 8,
    title: "Speech Therapy",
    description:
      "Comprehensive care to improve communication clarity, language...",
    image:
      "https://img.freepik.com/premium-photo/smiling-black-female-caregiver-teaching-elderly-woman-use-digital-tablet-home_236854-67276.jpg",
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
  // { platform: "google-plus", url: "#", icon: "icofont-google-plus" },
  { platform: "twitter", url: "#", icon: "icofont-twitter" },
  { platform: "linkedin", url: "#", icon: "icofont-linkedin" },
  { platform: "instagram", url: "#", icon: "icofont-instagram" },
  // { platform: "vimeo", url: "#", icon: "icofont-vimeo" },
  // { platform: "pinterest", url: "#", icon: "icofont-pinterest" },
];

export const newsletter = [
    {
      title: "Sign up for newsletter",
      description:
        "Suscribe to our newsletter and get up to date",
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

export const jobOffer = [
  {
    id: 1,
    image: "",
    title: "",
    subtitle: "Join Global Health Choice",
    description: "Are you interested in being part of our team?",
    buttons: [{ text: "Apply now", url: "/application", variant: "default" }],
  },
  {
    id: 2,
    image: "/img/slider3.jpg",
    title: "",
    subtitle: "Share your experience with us",
    description: "Do you have any suggestion?",
    buttons: [{ text: "Share now", url: "/application", variant: "default" }],
  },
];