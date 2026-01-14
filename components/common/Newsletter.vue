<template>
  <section class="newsletter section">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 col-12">
          <div class="subscribe-text">
            <h6>{{ newsletter[0].title }}</h6>
            <p class="description">
              {{ newsletter[0].description }}
            </p>
          </div>
        </div>
        
        <div class="col-lg-6 col-12">
          <div class="subscribe-form">
            <form class="newsletter-inner" @submit.prevent="handleSubmit">
              <input 
                v-model="email"
                :placeholder="newsletter[0].placeholder" 
                class="common-input" 
                required 
                type="email"
              >
              <button type="submit" class="btn">
                {{ newsletter[0].buttonText }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section> 
</template>

<script setup>
import { ref } from 'vue';
import { newsletter } from 'assets/data/data';

const email = ref('');

const handleSubmit = () => {
  if (!email.value) return;
  
  console.log('Subscribed with email:', email.value);
  emit('subscribed', email.value);
  email.value = '';
};
</script>

<style scoped>
.newsletter{
  background: #e3eddb;
}

.newsletter .subscribe-text h6{
  font-size: 32px;
  font-weight: 600;
}
</style>