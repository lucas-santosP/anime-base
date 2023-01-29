<script lang="ts" setup>
import { ref, onBeforeMount } from "vue";
import { tw } from "@/utils/tw";
import { useSearchAnimes } from "@/queries/useSearchAnimes";
import { useUrlSearchParam } from "@/hooks/useUrlSearchParam";
import { useRouter } from "vue-router";

import { ElScrollbar } from "element-plus";
import InputSearch from "@/components/ui/InputSearch.vue";
import AnimeListLoading from "@/components/anime-list/AnimeListLoading.vue";
import AnimeListItem from "@/components/anime-list/AnimeListItem.vue";
import AnimeListError from "@/components/anime-list/AnimeListError.vue";
import AnimeListEmpty from "@/components/anime-list/AnimeListEmpty.vue";

const input = ref("");
const router = useRouter();
const searchParam = useUrlSearchParam("search");

const { isFetching, data: animes, error } = useSearchAnimes(searchParam);

function handleSubmitSearch(e: Event) {
  searchParam.value = input.value.trim();
}

function handleSelectAnime(id: number) {
  router.push("/anime/" + id);
}

onBeforeMount(() => (input.value = searchParam.value));
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
        <AnimeListEmpty v-if="animes && !animes.length" :search="searchParam" />
      </ul>
    </el-scrollbar>
  </div>
</template>
