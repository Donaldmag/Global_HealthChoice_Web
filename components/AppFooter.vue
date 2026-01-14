<template>
  <footer class="footer">
    <!-- Footer Top -->
    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-12">
            <div class="single-footer">
              <h2>Global Health Choice</h2>
              <div class="logo mb-4">
                <NuxtLink to="/">
                  <img src="/img/global-health-choice-final-variant-white.png" alt="Global Health Choice Logo">
                </NuxtLink>
              </div>
              <p>
                <!-- Lorem Ipsum is simply dummy text of the printing and typesetting industry -->
              </p>
            </div>
          </div>
          
          <div class="col-lg-3 col-md-6 col-12">
            <div class="single-footer f-link">
              <h2>Quick Links</h2>
              <div class="row">
                <ul>
                  <li v-for="link in services" :key="link.text">
                    <NuxtLink :to="link.link">
                      <i class="fa fa-caret-right" aria-hidden="true"></i>{{ link.title }}
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div class="col-lg-3 col-md-6 col-12">
            <div class="single-footer f-link">
              <h2>Opening Hours</h2>
              <div class="row">
                <ul class="text-white">
                  <li class="day">Mon - Fri: <span>8:30 - 17:00</span></li>
                  <li class="day">Sat - Sun: <span>Closed</span></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div class="col-lg-3 col-md-6 col-12">
            <div class="single-footer">
              <h2>Contact Info</h2>
              <ul class="text-white">
                <li class="day">Adresse: <span>Virginia, United States</span></li>
                <li class="day">Contact: 
                  <NuxtLink to="tel:+2405051675" class="contact-link">+240 505 1675</NuxtLink>
                </li>
                <li class="day">Email: 
                  <NuxtLink to="mailto:info@globalhealthchoice.com" class="contact-link">info@globalhealthchoice.com</NuxtLink>
                </li>
              </ul>
              <ul class="social">
                <li v-for="social in socialLinks" :key="social.icon">
                  <NuxtLink :to="social.url" target="_blank">
                    <i :class="social.icon"></i>
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Copyright -->
    <div class="copyright py-3">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-12">
            <div class="copyright-content">
              <p>
                © Global Health Choice Copyright {{ currentYear }} | All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
import {  socialLinks, services } from 'assets/data/data';


</script>

<style scoped>

</style>