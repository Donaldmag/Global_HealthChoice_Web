<template>
    <div>
        <div>
            <SectionSlider :slides="jobOffer"/>
              <CommonHeroSlider :slides="slides"/>
              <HomeAboutSection />
              <CommonScheduleCardsIndividual :cards="scheduleCards" />
              <!-- <HomeCallToAction/> -->
              <!-- <HomeServicesSection /> -->
              <HomeServiceGrid class="container mx-auto mb-4 pb-4"
              :has-heading="true"
              :services="services"
              :columns="3"
                :show-dates="false"
            />
            <CommonNewsletter />
              
        </div>
    </div>
</template>

<script setup>
import { slides, services, scheduleCards, jobOffer } from 'assets/data/data';
// import { CommonJobSlider } from "../components/common/JobSlider.vue"
// const scheduleCardsData = scheduleData.scheduleCards;

// Vous pouvez contrôler le slider depuis ici si nécessaire
// const heroSliderRef = ref(null);

// onMounted(() => {
//   // Exemple: Ajouter un intervalle personnalisé
//   setInterval(() => {
//     if (heroSliderRef.value) {
//       heroSliderRef.value.nextSlide();
//     }
//   }, 7000);

// Set an Appointment

// Arrange a meeting with us to know how we can help your situation.

// Send Your Referrals

// Spread your experience with us to others, and introduce us to them.

// Our Woking Hours

// Get to know our professionals and how we upgrade our services.
// 356bae
// });
</script>

<style scoped>

</style>