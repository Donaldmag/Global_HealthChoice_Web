<template>
  <section class="schedule call-action overlay">
    <div class="container">
      <div class="schedule-inner">
        <div class="row mx-auto">
          <div
            v-for="card in cards"
            :key="card.id"
            :class="card.columnClass"
            class="mb-4"
          >
            <!-- Single Schedule Card -->
            <div 
              class="single-schedule"
              :class="card.variant"
              @click="handleCardClick(card)"
            >
              <div class="inner">
                <!-- Icon -->
                <div class="icon">
                  <i :class="card.icon"></i>
                </div>
                
                <!-- Content -->
                <div class="single-content">
                  <!-- Subtitle -->
                  <!-- <span>{{ card.subtitle }}</span> -->
                  
                  <!-- Title -->
                  <h4>{{ card.title }}</h4>
                  
                  <!-- Description or Opening Hours -->
                  <p v-if="card.description && card.type === 'regular'">
                    {{ card.description }}
                  </p>
                  
                  <!-- Opening Hours List -->
                  <ul v-if="card.type === 'withHours' && card.openingHours" class="time-sidual">
                    <li
                      v-for="(hour, index) in card.openingHours"
                      :key="index"
                      class="day"
                    >
                      {{ hour.day }} <span>{{ hour.hours }}</span>
                    </li>
                  </ul>
                  
                  <!-- Learn More Link -->
                  <NuxtLink 
                    :to="card.link" 
                    class="schedule-link"
                    @click="handleLinkClick(card, $event)"
                  >
                    {{ card.linkName }}<i class="fa fa-long-arrow-right"></i>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

// Props definition
const props = defineProps({
  // Accept cards data as prop
  cards: {
    type: Array,
    required: true,
    default: () => []
  },
  // Optional section class
  sectionClass: {
    type: String,
    default: ''
  },
  // Optional container class
  containerClass: {
    type: String,
    default: ''
  }
});

// Reactive state for any interactivity
const activeCard = ref(null);

// Event handlers
const handleCardClick = (card) => {
  console.log('Card clicked:', card.title);
  activeCard.value = card.id;
  emit('card-click', card);
};

const handleLinkClick = (card, event) => {
  event.stopPropagation();
  console.log('Learn more clicked for:', card.title);
  emit('link-click', card);
};

// Emit events
const emit = defineEmits(['card-click', 'link-click']);

// Expose methods if needed
defineExpose({
  getActiveCard: () => activeCard.value,
  setActiveCard: (id) => {
    activeCard.value = id;
  }
});
</script>

<style scoped>
.schedule-inner{
    transform:unset !important;
    background: transparent;
    padding-top: 100px;
}

.schedule {
    min-height: 450px;
}

.schedule a, .schedule .single-schedule .icon i {
   color : #9cc17a;
}

.schedule .single-schedule h4 {
    font: 24px;
}
</style>