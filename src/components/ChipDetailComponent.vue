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
  <div class="flex flex-col gap-1">
    <div class="text-gray-600 text-sm capitalize">{{ props.title }}</div>
    <div
      class="text-danger-text bg-danger-bg rounded-full w-max py-1 font-semibold px-4 text-sm capitalize"
    >
      {{ props.desc }}
    </div>
  </div>
</template>
