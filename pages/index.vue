<script setup lang="ts">
import { useUrlSearchParam } from "@/composables/useUrlSearchParam";
import { useSearchAnimes } from "@/queries/useSearchAnimes";
import { ref } from "vue";
import { useRouter } from "vue-router";

import UiInputSearch from "@/components/ui/InputSearch.vue";
import AnimeListLoading from "@/components/anime-list/AnimeListLoading.vue";
import AnimeListItem from "@/components/anime-list/AnimeListItem.vue";
import AnimeListError from "@/components/anime-list/AnimeListError.vue";
import AnimeListEmpty from "@/components/anime-list/AnimeListEmpty.vue";

import { ElScrollbar } from "element-plus";
import { useHead } from "@vueuse/head";

useHead({ title: "Home | Anime Base" });

const router = useRouter();
const searchParam = useUrlSearchParam("search");
const input = ref<string>(searchParam.value || "");

const { data: animes, error, isInitialLoading } = useSearchAnimes(searchParam);

function handleSubmitSearch(e: Event) {
  searchParam.value = input.value.trim();
}

function handleSelectAnime(id: number) {
  router.push({ path: "/anime/" + id });
}

const placeholder = ref("Search...");
</script>

<template>
  <div class="w-full flex flex-col p-4 h-content overflow-hidden">
    <h1 class="text-2xl font-medium mb-6">Home</h1>

    <form @submit.prevent="handleSubmitSearch" class="mb-2">
      <UiInputSearch
        name="search"
        placeholder="Search an anime..."
        v-model="input"
      />
      <button type="button" @click="placeholder = 'wtf'">change</button>
    </form>

    <ElScrollbar class="flex-1">
      <ul class="flex flex-col h-full overflow-y-auto pb-6">
        <AnimeListError v-if="error" :error="error" />
        <AnimeListLoading v-if="isInitialLoading" :repeat="5" />

        <AnimeListItem
          v-if="animes"
          tag="li"
          v-for="anime in animes"
          :key="anime.mal_id"
          :anime="{
            id: anime.mal_id,
            title: anime.title,
            type: anime.type,
            image: anime.images.jpg.image_url,
            airedFrom: anime.aired.from,
            genres: anime.genres.map((genre) => genre.name),
          }"
          @select="handleSelectAnime"
        />
        <AnimeListEmpty v-if="animes && !animes.length" :search="searchParam" />
      </ul>
    </ElScrollbar>
  </div>
</template>
