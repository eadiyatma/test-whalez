<script setup>
const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: "",
  },
});
</script>
<template>
  <button
    class="px-4 py-2 capitalize hover:text-tertiary-text hover:bg-tertiary-bg transition duration-300 ease-out rounded text-sm font-bold"
    :class="props.active ? 'text-tertiary-text bg-tertiary-bg' : ''"
  >
    {{ props.label }}
  </button>
</template>
