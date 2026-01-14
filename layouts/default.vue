<template>
    <div>
      <AppHeader/>
        <slot/>
      <!-- <CommonScrollTop @click="scrollToTop()"/> -->
      <AppFooter class="-mt-20 absolute w-full"/>
    </div>
</template>

<script setup>
const scrollToTop = () =>{
  window.scrollTo({top: 0, behavior: 'smooth'});
}
</script>