<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  desc: {
    type: String,
    default: "",
  },
});
</script>
<template>
  <div class="flex flex-col">
    <div class="text-gray-600 text-sm capitalize">{{ props.title }}</div>
    <div class="text-secondary capitalize">{{ props.desc }}</div>
  </div>
</template>
