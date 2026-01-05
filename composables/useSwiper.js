import { ref, onMounted, onUnmounted } from "vue";
import { slides } from "/assets/data/data";

export const useSwiper = () => {
  const swiperInstance = ref(null);
  const currentSlide = ref(0);
  const totalSlides = ref(0);
  const isSwiperLoaded = ref(false);

  // Options Swiper par défaut
  const swiperOptions = {
    speed: 800,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    on: {
      slideChange: (swiper) => {
        currentSlide.value = swiper.realIndex;
      },
      init: (swiper) => {
        totalSlides.value = swiper.slides.length;
        isSwiperLoaded.value = true;
      },
    },
  };

  // Charger Swiper de manière asynchrone
  const loadSwiper = async () => {
    if (typeof window !== "undefined") {
      try {
        // Import dynamique de Swiper
        const SwiperModule = await import("swiper");
        const Swiper = SwiperModule.default;

        // Import des modules
        const { Navigation, Pagination, Autoplay, EffectFade } = await import(
          "swiper/modules"
        );

        return { Swiper, Navigation, Pagination, Autoplay, EffectFade };
      } catch (error) {
        console.error("Erreur lors du chargement de Swiper:", error);
        return null;
      }
    }
    return null;
  };

  const initSwiper = async (swiperRef, options = {}) => {
    // Charger Swiper d'abord
    const swiperModules = await loadSwiper();

    if (!swiperModules || !swiperRef) {
      console.error("Swiper non chargé ou référence invalide");
      return;
    }

    const { Swiper, Navigation, Pagination, Autoplay, EffectFade } =
      swiperModules;

    // Configure Swiper modules
    Swiper.use([Navigation, Pagination, Autoplay, EffectFade]);

    // Merge options
    const mergedOptions = { ...swiperOptions, ...options };

    // Vérifier si un Swiper existe déjà et le détruire
    if (swiperInstance.value) {
      swiperInstance.value.destroy(true, true);
    }

    // Initialiser Swiper
    swiperInstance.value = new Swiper(swiperRef, mergedOptions);

    return swiperInstance.value;
  };

  const goToSlide = (index) => {
    if (swiperInstance.value) {
      swiperInstance.value.slideTo(index);
    }
  };

  const nextSlide = () => {
    if (swiperInstance.value) {
      swiperInstance.value.slideNext();
    }
  };

  const prevSlide = () => {
    if (swiperInstance.value) {
      swiperInstance.value.slidePrev();
    }
  };

  const startAutoplay = () => {
    if (swiperInstance.value) {
      swiperInstance.value.autoplay.start();
    }
  };

  const stopAutoplay = () => {
    if (swiperInstance.value) {
      swiperInstance.value.autoplay.stop();
    }
  };

  const destroySwiper = () => {
    if (swiperInstance.value) {
      swiperInstance.value.destroy(true, true);
      swiperInstance.value = null;
      isSwiperLoaded.value = false;
    }
  };

  // Auto-destroy on unmount
  onUnmounted(() => {
    destroySwiper();
  });

  return {
    slides,
    swiperInstance,
    currentSlide,
    totalSlides,
    isSwiperLoaded,
    initSwiper,
    goToSlide,
    nextSlide,
    prevSlide,
    startAutoplay,
    stopAutoplay,
    destroySwiper,
  };
};