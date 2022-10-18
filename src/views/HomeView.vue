<script setup>
import SidebarComponent from "../components/SidebarComponent.vue";
import DetailComponent from "../components/DetailComponent.vue";
import ChipDetailComponent from "../components/ChipDetailComponent.vue";
import ButtonComponent from "../components/ButtonComponent.vue";
import { ref } from "vue";
import IconMagnify from "../components/icons/IconMagnify.vue";
import IconBell from "../components/icons/IconBell.vue";
import IconHome from "../components/icons/IconHome.vue";

const button = ref([
  {
    label: "Detail",
    active: true,
  },
  {
    label: "Content",
    active: false,
  },
  {
    label: "Participant Course",
    active: false,
  },
  {
    label: "Invite User",
    active: false,
  },
]);
</script>

<template>
  <main class="bg-gray-50">
    <SidebarComponent />
    <div class="pl-56 py-2 bg-background min-h-screen pr-8">
      <!-- navbar -->
      <nav
        class="bg-white shadow-md p-4 rounded-md flex justify-between items-center"
      >
        <div><IconMagnify /></div>
        <div class="flex gap-4 items-center">
          <div><IconBell /></div>
          <div class="flex gap2">
            <div class="flex items-end flex-col">
              <div>Jhon Doe</div>
              <div class="text-sm">Admin</div>
            </div>
          </div>
          <div class="w-12 h-12 rounded-full">
            <img
              class="rounded-full"
              src="https://picsum.photos/64/64"
              alt=""
            />
          </div>
        </div>
      </nav>

      <!-- breadcrumbs -->
      <nav class="rounded-md w-full my-4 flex gap-6 items-center">
        <div class="text-2xl">Course</div>
        <ol class="list-reset flex text-sm items-center">
          <li>
            <IconHome />
          </li>
          <li><span class="text-gray-500 mx-2">></span></li>
          <li>
            <div href="#" class="">Content</div>
          </li>
          <li><span class="text-gray-500 mx-2">></span></li>
          <li class="text-gray-500">Course</li>
        </ol>
      </nav>
      <!-- detail coruse -->
      <div class="bg-white rounded shadow-md mt-4">
        <div class="p-4 border-b border-gray-200 w-full flex flex-col gap-6">
          <!-- title -->
          <div class="text-xl">Course Detail</div>

          <!-- detail section -->
          <div class="text-xl">Course Detail</div>
        </div>
        <div class="grid grid-cols-2 gap-4 p-4">
          <div class="flex">
            <div class="flex flex-col gap-4">
              <div>
                <img src="https://picsum.photos/600/400" alt="" />
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-8">
            <DetailComponent
              title="Title"
              desc="Introduction to Core Values AKHLAK"
            />
            <DetailComponent
              title="Category"
              desc="Digital/Content & Service"
            />
            <DetailComponent
              title="Competency"
              desc="Digital Product/Service Planing"
            />
            <DetailComponent title="Caption" desc="Core Values BUMN - AKHLAK" />
            <DetailComponent title="Update By" desc="Admin" />
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4 p-4">
          <div class="flex flex-col gap-4">
            <DetailComponent title="Create at" desc="08/02/2020 00:00" />
            <ChipDetailComponent title="status" desc="Draft" />
          </div>
          <div class="flex flex-col gap-4">
            <DetailComponent title="Last Update" desc="08/02/2020 00:00" />
            <ChipDetailComponent title="Privacy" desc="Public" />
          </div>
        </div>

        <div class="flex gap-4 pl-4 py-4 items-center">
          <div class="text-secondary capitalize">Content</div>
          <div class="border-b w-full border-gray-200"></div>
        </div>

        <div class="p-4 flex gap-2">
          <ButtonComponent
            v-for="(item, index) in button"
            :key="index"
            :active="item.active"
            :label="item.label"
          />
        </div>

        <div class="px-4 py-2">
          <div class="text-secondary">
            Pengenalan Core Values BUMN AKHLAK (Amanah, Kompetensi, Harmonis,
            Loyal,Adaptif, Kolaboratif)
          </div>
        </div>
        <div class="border-b border-gray-200"></div>

        <div class="p-4 text-right">
          <button class="bg-primary px-8 py-2 rounded text-white">
            Publish Course
          </button>
        </div>
      </div>
    </div>
  </main>
</template>
