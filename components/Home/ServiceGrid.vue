<template>
  <div class="row">
    <CommonSectionHeader v-if="hasHeading" :title="'Our Services'" :subtitle="'Professional & Compassionate Home Care Services'"/>
    <div 
      v-for="service in services"
      :key="service.id"
      :class="gridColumnClass"
      class="mb-4"
    >
    
      <HomeServiceCard
        :service="service"
        :show-date="showDates"
        @click="handleServiceClick"
        @link-click="handleServiceLinkClick"
      />
    </div>
  </div>
</template>

<script setup>
// import { computed } from 'vue';
// import ServiceCard from './ServiceCard.vue';

const props = defineProps({
  services: {
    type: Array,
    required: true,
    default: () => []
  },
  columns: {
    type: Number,
    default: 3,
    validator: (value) => [1, 2, 3, 4].includes(value)
  },
  showDates: {
    type: Boolean,
    default: false
  },
  hasHeading: {type: Boolean}
});

// const emit = defineEmits(['service-click', 'service-link-click']);

const gridColumnClass = computed(() => {
  switch(props.columns) {
    case 1: return 'col-12';
    case 2: return 'col-lg-6 col-md-6 col-12';
    case 3: return 'col-lg-4 col-md-6 col-12';
    case 4: return 'col-lg-3 col-md-6 col-12';
    default: return 'col-lg-4 col-md-6 col-12';
  }
});

const handleServiceClick = (service) => {
  // emit('service-click', service);
};

const handleServiceLinkClick = (service) => {
  // emit('service-link-click', service);
};
</script>

<style scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.mb-4 {
  margin-bottom: 30px !important;
}

/* Responsive Anpassungen */
@media (max-width: 992px) {
  .col-lg-4 {
    flex: 0 0 50%;
    max-width: 50%;
  }
}

@media (max-width: 768px) {
  .col-md-6, .col-lg-4 {
    flex: 0 0 100%;
    max-width: 100%;
  }
  
  .mb-4 {
    margin-bottom: 20px !important;
  }
}
</style>