// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  css: ["swiper/swiper-bundle.css"],
  devtools: { enabled: true },
  postcss: {
    plugins: {
      autoprefixer: {},
    },
  },
  vue: {
    propsDestructure: true,
  },
  // SEO Config for the entire app
  app: {
    head: {
      title: "Global Health Choice",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",

      meta: [
        { name: "description", content: "Global Health Choice Website" },

        {
          name: "theme-color",
          content: "#141414",
          media: "(prefers-color-scheme: dark)",
        },
        { name: "author", content: "Datum Solution" },
      ],

      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.png" },

        { rel: "stylesheet", type: "text/css", href: "/css/bootstrap.min.css" },
        { rel: "stylesheet", type: "text/css", href: "/css/nice-select.css" },
        {
          rel: "stylesheet",
          type: "text/css",
          href: "/css/font-awesome.min.css",
        },
        { rel: "stylesheet", type: "text/css", href: "/css/icofont.css" },
        { rel: "stylesheet", type: "text/css", href: "/css/slicknav.min.css" },
        { rel: "stylesheet", type: "text/css", href: "/css/owl-carousel.css" },
        { rel: "stylesheet", type: "text/css", href: "/css/datepicker.css" },
        { rel: "stylesheet", type: "text/css", href: "/css/animate.min.css" },
        {
          rel: "stylesheet",
          type: "text/css",
          href: "/css/magnific-popup.css",
        },
        { rel: "stylesheet", type: "text/css", href: "/css/normalize.css" },
        { rel: "stylesheet", type: "text/css", href: "/css/style.css" },
        { rel: "stylesheet", type: "text/css", href: "css/responsive.css" },
        { rel: "stylesheet", type: "text/css", href: "/css/color/color1.css" },
        { rel: "stylesheet", type: "text/css", id: "colors" },
      ],

      script: [
        { src: "/js/jquery.min.js", type: "text/javascript", defer: true  },
        { src: "/js/jquery-migrate.js", type: "text/javascript", defer: true  },
        { src: "/js/easing.js", type: "text/javascript", defer: true  },
        { src: "/js/colors.js", type: "text/javascript", defer: true  },
        { src: "/js/popper.min.js", type: "text/javascript", defer: true  },
        { src: "/js/bootstrap.min.js", type: "text/javascript", defer: true  },
        { src: "/js/bootstrap-datepicker.js", type: "text/javascript", defer: true  },
        { src: "/js/jquery.nav.js", type: "text/javascript", defer: true  },
        { src: "/js/slicknav.min.js", type: "text/javascript", defer: true  },
        { src: "/js/jquery.scrollUp.min.js", type: "text/javascript", defer: true  },
        { src: "/js/niceselect.js", type: "text/javascript", defer: true  },
        { src: "/js/tilt.jquery.min.js", type: "text/javascript", defer: true  },
        { src: "/js/owl-carousel.js", type: "text/javascript", defer: true  },
        { src: "/js/jquery.counterup.min.js", type: "text/javascript", defer: true  },
        { src: "/js/waypoints.min.js", type: "text/javascript", defer: true  },
        { src: "/js/steller.js", type: "text/javascript", defer: true  },
        { src: "/js/wow.min.js", type: "text/javascript", defer: true  },
        { src: "/js/jquery.magnific-popup.min.js", type: "text/javascript", defer: true  },
        { src: "/js/main.js", type: "text/javascript", defer: true  },
      ],
    },
  },
});
