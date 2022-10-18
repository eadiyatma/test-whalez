<script setup>
import IconHome from "./icons/IconHome.vue";
import { ref, h } from "vue";
import IconChevron from "./icons/IconChevron.vue";
</script>
<template>
  <nav class="h-screen border w-52 fixed bg-white flex flex-col shadow-xl">
    <div class="px-2 py-2 mt-10">
      <button
        class="flex justify-between w-full items-center text-secondary text-xl"
      >
        <div class="flex gap-2 items-center">
          <IconHome />
          <div>Dashboard</div>
        </div>
        <div>
          <IconChevron />
        </div>
      </button>
    </div>
  </nav>
</template>
