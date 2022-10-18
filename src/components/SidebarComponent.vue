<script setup>
import IconHome from "./icons/IconHome.vue";
import { ref, h } from "vue";
import IconChevron from "./icons/IconChevron.vue";
import IconSquare from "./icons/IconSquare.vue";
import IconAccount from "./icons/IconAccount.vue";
import IconSetting from "./icons/IconSetting.vue";
import IconChart from "./icons/IconChart.vue";
import IconBranding from "./icons/IconBranding.vue";
import IconLink from "./icons/IconLink.vue";
</script>
<template>
  <nav class="h-screen border w-52 fixed bg-white flex flex-col shadow-xl">
    <div class="px-2 py-2 mt-10 flex flex-col gap-6">
      <button
        class="flex justify-between w-full items-center text-secondary text-xl"
      >
        <div class="flex gap-2 items-center">
          <IconHome class="text-2xl" />
          <div>Dashboard</div>
        </div>
        <div>
          <IconChevron />
        </div>
      </button>
      <button
        class="flex justify-between w-full items-center text-secondary text-xl"
      >
        <div class="flex gap-2 items-center">
          <IconSquare class="text-2xl" />
          <div>Content</div>
        </div>
        <div>
          <IconChevron />
        </div>
      </button>
      <button
        class="flex justify-between w-full items-center text-secondary text-xl"
      >
        <div class="flex gap-2 items-center">
          <IconAccount class="text-2xl" />
          <div>Account</div>
        </div>
        <div>
          <IconChevron />
        </div>
      </button>
      <button
        class="flex justify-between w-full items-center text-secondary text-xl"
      >
        <div class="flex gap-2 items-center">
          <IconSetting class="text-2xl" />
          <div>Setting</div>
        </div>
        <div>
          <IconChevron />
        </div>
      </button>
      <button
        class="flex justify-between w-full items-center text-secondary text-xl"
      >
        <div class="flex gap-2 items-center">
          <IconChart class="text-2xl" />
          <div>Analytic</div>
        </div>
        <div>
          <IconChevron />
        </div>
      </button>
      <button
        class="flex justify-between w-full items-center text-secondary text-xl"
      >
        <div class="flex gap-2 items-center">
          <IconBranding class="text-2xl" />
          <div>Branding</div>
        </div>
        <div>
          <IconChevron />
        </div>
      </button>
      <button
        class="flex justify-between w-full items-center text-secondary text-xl"
      >
        <div class="flex gap-2 items-center">
          <IconLink class="text-2xl" />
          <div>Integrasi</div>
        </div>
        <div>
          <IconChevron />
        </div>
      </button>
    </div>
  </nav>
</template>
