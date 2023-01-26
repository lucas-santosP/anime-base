<script lang="ts" setup>
import { ref, watchEffect, onBeforeMount } from "vue";
import { tw } from "@/utils/tw";
import { useSearchAnimes } from "@/queries/useSearchAnimes";

import { ElScrollbar } from "element-plus";
import InputSearch from "@/components/ui/InputSearch.vue";
import AnimeListLoading from "@/components/anime-list/AnimeListLoading.vue";
import AnimeListItem from "@/components/anime-list/AnimeListItem.vue";
import AnimeListError from "@/components/anime-list/AnimeListError.vue";
import AnimeListEmpty from "@/components/anime-list/AnimeListEmpty.vue";
import { useRoute, useRouter } from "vue-router";

const input = ref("");
const search = ref("");
const router = useRouter();
const route = useRoute();

const { isFetching, data: animes, error } = useSearchAnimes(search);

function handleSubmitSearch(e: Event) {
  search.value = input.value;
}

function handleSelectAnime(id: number) {
  router.push("/anime/" + id);
}

onBeforeMount(() => {
  const querySearch = route.query["search"];
  if (typeof querySearch === "string") {
    input.value = querySearch;
    search.value = querySearch;
  }
});

watchEffect(() => {
  router.push("/?search=" + search.value);
});
</script>

<template>
  <div :class="tw('w-full flex flex-col h-screen overflow-hidden')">
    <form @submit.prevent="handleSubmitSearch" :class="tw('my-5 px-4')">
      <InputSearch
        :value="input"
        name="search"
        @input="(value) => (input = value)"
        placeholder="Search an anime..."
      />
    </form>

    <el-scrollbar :class="tw('flex-1')">
      <ul :class="tw('flex flex-col h-full overflow-y-auto pb-8 pt-2 px-4')">
        <AnimeListError v-if="error" :error="error" />
        <AnimeListLoading v-if="isFetching" :repeat="5" />

        <AnimeListItem
          v-else
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
        <AnimeListEmpty v-if="animes && !animes.length" :search="search" />
      </ul>
    </el-scrollbar>
  </div>
</template>
