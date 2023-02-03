<script lang="ts" setup>
import { formatDate } from "@/utils/formatDate";
import { tw } from "@/utils/tw";

const props = defineProps<{
  tag?: "li" | "div";
  anime: {
    id: number;
    title: string;
    type: string;
    airedFrom?: string | null;
    image: string;
    genres: string[];
  };
}>();

const emit = defineEmits<{
  (e: "select", id: number): void;
}>();
</script>

<template>
  <li
    :title="props.anime.title"
    tabindex="0"
    :class="
      tw([
        'flex gap-8  p-2 cursor-pointer transition-all overflow-hidden outline-none ',
        'hover:bg-gray-700 focus:bg-gray-700 focus:ring',
      ])
    "
    @click="(_e) => emit('select', props.anime.id)"
    @keypress.enter="(_e) => emit('select', props.anime.id)"
  >
    <img
      :src="props.anime.image"
      alt="Cover"
      :class="tw('h-[130px] w-[100px] min-w-[100px] object-cover border-gray-800 border')"
    />

    <div :class="tw('flex flex-col w-full overflow-hidden')">
      <p :class="tw('font-medium text-lg truncate')">{{ props.anime.title }}</p>
      <p :class="tw('text-gray-300 text-lg')">{{ props.anime.type }}</p>
      <p>{{ props.anime.airedFrom && formatDate(props.anime.airedFrom, { dateOnly: true }) }}</p>

      <div :class="tw('mt-auto flex gap-2')">
        <span
          v-for="genre in props.anime.genres"
          :class="tw('py-1 px-2 rounded-md bg-gray-600 border-gray-800 border text-sm')"
        >
          {{ genre }}
        </span>
      </div>
    </div>
  </li>
</template>
