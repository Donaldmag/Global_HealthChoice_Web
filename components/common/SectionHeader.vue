<template>
  <div class="row mt-4 pt-4">
      <div class="col-lg-12">
        <div class="section-title">
          <h2>{{ title }}</h2>
          <img v-if="image" :src="image" :alt="alt" />
          <p v-if="subtitle" :class="{ 'px-5': usePadding }">{{ subtitle }}</p>
          <slot></slot>
        </div>
      </div>
    </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: '/img/section-img.png'
  },
  alt: {
    type: String,
    default: 'Section divider'
  },
  usePadding: {
    type: Boolean,
    default: true
  }
});
</script>

<style scoped>
.section-title {
  text-align: center;
  margin-bottom: 50px;
}

.section-title h2 {
  color: #2c3e50;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 20px;
}

.section-title img {
  max-width: 150px;
  height: auto;
  margin: 0 auto 20px;
  display: block;
}

.section-title p {
  color: #666;
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .section-title h2 {
    font-size: 2rem;
  }
  
  .section-title p {
    font-size: 1rem;
    padding-left: 15px !important;
    padding-right: 15px !important;
  }
}

.section-title h2{
  color: #0860b6 !important;
}
</style>