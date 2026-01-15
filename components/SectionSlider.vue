<template>
  <!-- Slider Area -->
  <section class="slider">
    <div class="hero-slider">
      <!-- Swiper Container -->
      <div class="swiper" ref="swiperRef">
        <div class="swiper-wrapper">
          <!-- Slides -->
          <CommonHeroSlide
            v-for="slide in slides"
            :key="slide.id"
            :slide="slide"
            :variantSlide="true"
            @button-click="handleSlideButtonClick"
          />
        </div>
        
        <!-- Swiper Pagination -->
        <!-- <div class="swiper-pagination"></div> -->
        
        <!-- Swiper Navigation -->
        <!-- <div class="swiper-button-prev"></div> -->
        <!-- <div class="swiper-button-next"></div> -->
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useSwiper } from '@/composables/useSwiper';

const props = defineProps(['slides'])
// import HeroSlide from './HeroSlide.vue';

// Références
const swiperRef = ref(null);

// Use composable
const {
  // slides,
  swiperInstance,
  currentSlide,
  totalSlides,
  initSwiper,
  nextSlide,
  prevSlide,
  startAutoplay,
  stopAutoplay
} = useSwiper();

// Lifecycle hooks
onMounted(() => {
  if (swiperRef.value) {
    // Initialiser Swiper avec des options supplémentaires si besoin
    initSwiper(swiperRef.value, {
      autoplay: {
        delay: 6000,
        disableOnInteraction: false
      }
    });
    
    // Démarrer l'autoplay
    startAutoplay();
  }
});

onUnmounted(() => {
  if (swiperInstance.value) {
    swiperInstance.value.destroy(true, true);
  }
});

// Méthodes
const handleSlideButtonClick = (data) => {
  console.log('Button clicked:', data);
  // Vous pouvez émettre un événement ou naviguer
  // navigateTo(data.buttonUrl);
};

// Exposer des méthodes si nécessaire
defineExpose({
  nextSlide,
  prevSlide,
  getCurrentSlide: () => currentSlide.value,
  getTotalSlides: () => totalSlides.value
});
</script>

<style scoped>
/* Styles spécifiques pour Swiper */
.slider {
  position: relative;
}

.hero-slider {
  position: relative;
  overflow: hidden;
}

/* Ajustements Swiper */
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  position: relative;
}


/* Ajustements pour le contenu du slide */
.single-slider {
  max-height: 80px !important;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  position: relative;
}

.single-slider::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
}

.text {
  position: relative;
  z-index: 1;
  color: white;
}

.text h1 {
  font-size: 3rem;
  margin-bottom: 20px;
  font-weight: 700;
}

.text p {
  font-size: 1.1rem;
  margin-bottom: 30px;
  line-height: 1.6;
}

.button {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.btn {
  padding: 12px 30px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-block;
}

.btn:not(.primary) {
  background: white;
  color: #333;
  border: 2px solid white;
}

.btn.primary {
  background: var(--primary-color, #3498db);
  color: white;
  border: 2px solid var(--primary-color, #3498db);
}

.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

/* Responsive */
@media (max-width: 768px) {
  .single-slider {
    min-height: 500px;
  }
  
  .text h1 {
    font-size: 2.2rem;
  }
  
  .text p {
    font-size: 1rem;
  }
  
  .button {
    flex-direction: column;
  }
  
  .btn {
    width: 100%;
    text-align: center;
  }
}
</style>