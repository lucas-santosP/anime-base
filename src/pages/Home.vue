<script lang="ts" setup>
import { ref } from "vue";
import { tw } from "@/utils/tw";
import { useSearchAnimes } from "@/queries/useSearchAnimes";

import { ElScrollbar } from "element-plus";
import InputSearch from "@/components/InputSearch.vue";
import AnimeListLoading from "@/components/anime-list/AnimeListLoading.vue";
import AnimeListItem from "@/components/anime-list/AnimeListItem.vue";
import AnimeListError from "@/components/anime-list/AnimeListError.vue";
import AnimeListEmpty from "@/components/anime-list/AnimeListEmpty.vue";

const input = ref("");
const search = ref("");

const { isFetching, data: animes, error } = useSearchAnimes(search);

function handleSubmitSearch(e: Event) {
  search.value = input.value;
}
</script>

<template>
  <div :class="tw('w-full flex flex-col h-screen overflow-hidden')">
    <form @submit.prevent="handleSubmitSearch" :class="tw('my-5 px-4')">
      <InputSearch
        :value="input"
        name="search"
        @input="(value) => (input = value)"
        placeholder="Search an anime"
      />
    </form>

    <el-scrollbar :class="tw('flex-1')">
      <ul :class="tw('flex flex-col h-full overflow-y-auto pb-8 px-4')">
        <AnimeListError v-if="error" :error="error" />
        <AnimeListLoading v-if="isFetching" :repeat="5" />

        <AnimeListItem
          v-else
          v-for="anime in animes"
          :anime="{
            title: anime.title,
            type: anime.type,
            image: anime.images.jpg.image_url,
            airedFrom: anime.aired.from,
            genres: anime.genres.map((genre) => genre.name),
          }"
        />
        <AnimeListEmpty v-if="animes && !animes.length" :search="search" />
      </ul>
    </el-scrollbar>
  </div>
</template>
