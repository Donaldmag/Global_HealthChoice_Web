<template>
  <div class="topbar">
    <div class="container">
      <div class="row">
        <ul class="top-contact">
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