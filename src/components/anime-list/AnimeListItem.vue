<script lang="ts" setup>
import { formatDate } from "@/utils/formatDate";
import { tw } from "@/utils/tw";

const { anime } = defineProps<{
  anime: {
    title: string;
    type: string;
    airedFrom?: string | null;
    image: string;
    genres: string[];
  };
}>();
</script>

<template>
  <li
    :title="anime.title"
    :class="tw('flex gap-8 hover:bg-gray-700 p-2 cursor-pointer transition-all overflow-hidden')"
  >
    <img
      :src="anime.image"
      alt="Cover"
      :class="tw('h-[130px] w-[100px] min-w-[100px] object-cover border-gray-800 border')"
    />

    <div :class="tw('flex flex-col w-full overflow-hidden')">
      <p :class="tw('font-medium text-lg truncate')">{{ anime.title }}</p>
      <p :class="tw('text-gray-300 text-lg')">{{ anime.type }}</p>
      <p>{{ anime.airedFrom && formatDate(anime.airedFrom, { dateOnly: true }) }}</p>

      <div :class="tw('mt-auto flex gap-2')">
        <span
          v-for="genre in anime.genres"
          :class="tw('py-1 px-2 rounded-md bg-gray-600 border-gray-800 border text-sm')"
        >
          {{ genre }}
        </span>
      </div>
    </div>
  </li>
</template>
