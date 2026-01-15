<template>
  <div class="swiper-slide">
    <div v-if="!variantSlide"
      class="single-slider" 
      :style="{ backgroundImage: `url('${slide.image}')` }"
    >
      <div class="container">
        <div class="row align-items-center g-0">
          <div class="col-lg-7">
            <div class="text col-8" >
              <h1
                class="text-color"
                :class="{ 'text-color-2': slide.id === 1 }"
                v-html="slide.id === 1 ? slideTitleFormatted : slide.subtitle"
              ></h1>
              <p>{{ slide.description }}</p>
              
              <div class="button">
                <NuxtLink
                  v-for="(button, index) in slide.buttons"
                  :key="index"
                  :to="button.url"
                  class="btn"
                  :class="{ 'primary': button.variant === 'primary' }"
                  @click="handleButtonClick(button)"
                >
                  {{ button.text }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div  v-if="variantSlide"
      class="single-slider custom-height" 
    >
      <div class="container">
        <div class="row align-items-center g-0">
          <div class="col-lg-12">
            <div class="text row mt-4" >
              <h1 class="text-color-3 text-weight"
              >{{ slide.subtitle }}</h1>
              <p class="mt-0">{{ slide.description }}</p>
              
              <div class="button mt-4 custom-btn">
                <NuxtLink
                    v-for="(button, index) in slide.buttons"
                  :key="index"
                  :to="button.url" 
                  class="schedule-link text-color-2"
                  @click="handleButtonClick(button)"
                  >
                    {{ button.text }}<i class="fa fa-long-arrow-right"></i>
                  </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  slide: {
    type: Object,
    required: true,
    default: () => ({})
  },
  variantSlide: {
    type: Boolean,
    default: false,
  }
});

// Formater le titre spécial pour le premier slide
const slideTitleFormatted = computed(() => {
  if (props.slide.id === 1 && !props.variantSlide) {
    return `Global <span class="text-color-2">Health</span> <br> <span>Choice</span> Services`;
  }
  return props.slide.subtitle;
});

// const sliderClasses = computed(() => {
//   const classes = ['single-slider'];
//   if (props.variantSlide) {
//     classes.push('custom-height');
//   }
//   return classes;
// });

const emit = defineEmits(['button-click']);

const handleButtonClick = (button) => {
  emit('button-click', {
    slideId: props.slide.id,
    buttonText: button.text,
    buttonUrl: button.url
  });
};
</script>

<style scoped>
.custom-height{
  height: 170px;
  background-color: #d3eae3;
}
.text-weight{
  font-weight: 500 !important;
  font-size: 32px !important;
}

@media only screen and (max-width: 450px) {
    .slider .single-slider:before{
      opacity: 0.1;
    }
}

.custom-btn a{
  max-width: 100px;
  padding: 5px 10px;
  border-radius: 4px;
  background: #83b25942;
  color: #1c477c !important;
}

@media (max-width: 768px) {
  .text-weight{
  font-size: 24px !important;
 }
}

</style>