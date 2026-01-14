<template>
  <NuxtLink
    :to="button.url"
    class="btn"
    :class="buttonClasses"
    @click="handleClick"
  >
    {{ button.text }}
    <i v-if="button.icon" :class="button.icon"></i>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  button: {
    type: Object,
    required: true,
    default: () => ({
      text: '',
      url: '#',
      variant: 'primary',
      icon: null
    })
  }
});

const emit = defineEmits(['click']);

const buttonClasses = computed(() => {
  const classes = [];
  
  switch (props.button.variant) {
    case 'primary':
      classes.push('btn-primary');
      break;
    case 'secondary':
      classes.push('btn-secondary');
      break;
    case 'outline':
      classes.push('btn-outline');
      break;
    default:
      classes.push('btn-primary');
  }
  
  return classes;
});

const handleClick = () => {
  emit('click', props.button);
};
</script>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 30px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.btn-primary {
  background-color: #3498db;
  color: white;
  border-color: #3498db;
}

.btn-primary:hover {
  background-color: #2980b9;
  border-color: #2980b9;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(41, 128, 185, 0.3);
}

.btn-secondary {
  background-color: #2ecc71;
  color: white;
  border-color: #2ecc71;
}

.btn-secondary:hover {
  background-color: #27ae60;
  border-color: #27ae60;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(46, 204, 113, 0.3);
}

.btn-outline {
  background-color: transparent;
  color: white;
  border-color: white;
}

.btn-outline:hover {
  background-color: white;
  color: #3498db;
  transform: translateY(-2px);
}

.btn i {
  font-size: 0.9em;
  transition: transform 0.3s;
}

.btn:hover i {
  transform: translateX(3px);
}
</style>