<template>
  <div class="swiper-slide">
    <div 
      class="single-slider" 
      :style="{ backgroundImage: `url('${slide.image}')` }"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <div class="text row" :class="{ 'col-7': slide.id === 1 }">
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
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  slide: {
    type: Object,
    required: true,
    default: () => ({})
  }
});

// Formater le titre spécial pour le premier slide
const slideTitleFormatted = computed(() => {
  if (props.slide.id === 1) {
    return `Global <span class="text-color-2">Health</span> <br> <span>Choice</span> Services`;
  }
  return props.slide.subtitle;
});

const emit = defineEmits(['button-click']);

const handleButtonClick = (button) => {
  emit('button-click', {
    slideId: props.slide.id,
    buttonText: button.text,
    buttonUrl: button.url
  });
};
</script>