<template>
  <div class="topbar">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-8 text-left">
          <ul class="top-contact float-none">
            <li>
              <i class="fa fa-map text-white"></i>
              <span>{{ contactInfo.location }}</span>
            </li>
            <li>
              <i class="fa fa-phone text-white"></i>
              <NuxtLink :to="contactInfo.phoneHref">
                {{ contactInfo.phone }}
              </NuxtLink>
            </li>
            <li>
              <i class="fa fa-envelope text-white"></i>
              <NuxtLink :to="contactInfo.emailHref">
                {{ contactInfo.email }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="col-12 col-md-4">
          <ul class="top-contact float-none">
            <li>
              <i class="fa fa-clock-o fa-lg text-white"></i>
              <span>{{ contactInfo.officeHours }}</span>
            </li>
            <!-- <li>
              <i class="fa fa-phone text-white"></i>
              <NuxtLink :to="contactInfo.phoneHref">
                {{ contactInfo.phone }}
              </NuxtLink>
            </li> -->
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  contactInfo: {
    type: Object,
    required: true,
    default: () => ({})
  }
});
</script>

<style scoped>
.float-none{
  float: none !important;
}
</style>