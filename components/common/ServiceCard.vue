<template>
  <div class="single-news service-card" @click="handleClick">
    <div class="news-head">
      <img 
        :src="service.image" 
        :alt="service.alt" 
        class="service-image"
        loading="lazy"
      />
      <div v-if="showCategory && service.category" class="service-category">
        {{ service.category }}
      </div>
    </div>
    
    <div class="news-body">
      <div class="news-content">
        <!-- Date (optionnel) -->
        <div v-if="showDate && service.date" class="date">
          <i class="fa fa-calendar"></i> {{ service.date }}
        </div>
        
        <!-- Titre avec icône -->
        <h2 class="service-title">
          <i v-if="service.icon" :class="service.icon"></i>
          <NuxtLink :to="service.link" @click.prevent="handleLinkClick">
            {{ service.title }}
          </NuxtLink>
        </h2>
        
        <!-- Description -->
        <p class="text service-description">
          {{ service.description }}
        </p>
        
        <!-- Bouton en savoir plus -->
        <div class="service-actions">
          <NuxtLink 
            :to="service.link" 
            class="read-more-btn"
            @click.prevent="handleLinkClick"
          >
            Learn More <i class="fa fa-arrow-right"></i>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  service: {
    type: Object,
    required: true,
    default: () => ({})
  },
  showCategory: {
    type: Boolean,
    default: false
  },
  showDate: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['click', 'link-click']);

const handleClick = () => {
  emit('click', props.service);
};

const handleLinkClick = (event) => {
  event.stopPropagation();
  emit('link-click', props.service);
  
  // Navigation optionnelle
  // navigateTo(props.service.link);
};
</script>

<style scoped>
.single-news {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  height: 100%;
  cursor: pointer;
}

.single-news:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.news-head {
  position: relative;
  overflow: hidden;
}

.service-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.single-news:hover .service-image {
  transform: scale(1.05);
}

.service-category {
  position: absolute;
  top: 15px;
  right: 15px;
  background: #3498db;
  color: white;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
}

.news-body {
  padding: 25px;
}

.news-content {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.date {
  color: #7f8c8d;
  font-size: 0.9rem;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 5px;
}

.service-title {
  margin: 0 0 15px 0;
  font-size: 1.5rem;
  color: #2c3e50;
}

.service-title a {
  color: inherit;
  text-decoration: none;
  transition: color 0.3s;
  display: flex;
  align-items: center;
  gap: 10px;
}

.service-title a:hover {
  color: #3498db;
}

.service-title i {
  color: #3498db;
  font-size: 1.2rem;
}

.service-description {
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
  flex-grow: 1;
  font-size: 1rem;
}

.service-actions {
  margin-top: auto;
}

.read-more-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #3498db;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s;
}

.read-more-btn:hover {
  color: #2980b9;
  gap: 12px;
}

.read-more-btn i {
  font-size: 0.9rem;
  transition: transform 0.3s;
}

.read-more-btn:hover i {
  transform: translateX(5px);
}

/* Responsive */
@media (max-width: 992px) {
  .service-image {
    height: 220px;
  }
  
  .news-body {
    padding: 20px;
  }
  
  .service-title {
    font-size: 1.3rem;
  }
}

@media (max-width: 768px) {
  .service-image {
    height: 200px;
  }
  
  .service-title {
    font-size: 1.2rem;
  }
  
  .service-description {
    font-size: 0.95rem;
  }
}
</style>