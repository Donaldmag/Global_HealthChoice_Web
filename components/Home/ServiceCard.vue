<template>
  <div class="single-news service-card" @click="handleClick">
    <div class="news-head">
      <img 
        :src="service.image" 
        :alt="service.alt" 
        class="service-image"
      />
    </div>
    
    <div class="news-body">
      <div class="news-content">
        <!-- Datum (optional) -->
        <!-- <div v-if="showDate && service.date" class="date">
          <i class="fa fa-calendar"></i> {{ service.date }}
        </div> -->
        
        <!-- Titel -->
        <h2 class="service-title">
          <NuxtLink :to="service.link" @click.prevent="handleLinkClick">
            {{ service.title }}
          </NuxtLink>
        </h2>
        
        <!-- Beschreibung -->
        <p class="text service-description">
          {{ service.description }}
        </p>
        
        <!-- Weitere Informationen Button -->
        <div class="service-actions">
          <NuxtLink 
            :to="service.link" 
            class="read-more-btn"
            @click.prevent="handleLinkClick"
          >
            Find out more <i class="fa fa-arrow-right"></i>
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
    default: () => ({
      id: 1,
      title: "Service Titel",
      description: "Service Beschreibung",
      image: "",
      alt: "Service Bild",
      link: "#",
      date: null,
      category: null
    })
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
  
};
</script>

<style scoped>
.single-news {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  height: 100%;
  cursor: pointer;
}

.single-news:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
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
  font-size: 1.2rem;
  color: #2c3e50;
}

.service-title a {
  color: inherit;
  text-decoration: none;
  transition: color 0.3s;
}

.service-title a:hover {
  color: #3498db;
}

.service-description {
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
  flex-grow: 1;
  font-size: 0.8rem;
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
  font-weight: 500;
  font-size: 0.85rem;
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
    font-size: 1.2rem;
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