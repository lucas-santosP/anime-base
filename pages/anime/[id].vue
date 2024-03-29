<script lang="ts" setup>
import { useAnimeDetails } from "@/queries/useAnimeDetails";
import { useAnimeCharacters } from "@/queries/useAnimeCharacters";
import { useRoute } from "vue-router";
import { useHead } from "@vueuse/head";
import { computed } from "vue";

import UiErrorMessage from "@/components/ui/ErrorMessage.vue";
import AnimeDetailsLoading from "@/components/anime-details/AnimeDetailsLoading.vue";
import AnimeStatusBadge from "@/components/ui/AnimeStatusBadge.vue";
import AnimeDetailsTitle from "@/components/anime-details/AnimeDetailsTitle.vue";
import AnimeRating from "@/components/ui/AnimeRating.vue";
import AnimeRanking from "@/components/ui/AnimeRanking.vue";
import AnimeCharactersList from "@/components/anime-details/AnimeCharactersList.vue";
import { ElDivider, ElScrollbar, ElTag } from "element-plus";

const route = useRoute();
const animeId = Number(route.params.id);

const { data, isInitialLoading, error } = useAnimeDetails(animeId);
const characters = useAnimeCharacters(animeId);

const charactersList = computed(() => {
  if (!characters.data.value) return [];

  return [...characters.data.value]
    .sort((a, b) => {
      if (a.favorites > b.favorites) return -1;
      if (a.favorites < b.favorites) return 1;
      return 0;
    })
    .slice(0, 10);
});

useHead({
  title: computed(() => (data.value?.title ? data.value?.title : "Details")),
  titleTemplate: (value) => value + " | Anime Base",
});
</script>

<template>
  <div class="flex flex-col mb-6 p-4">
    <AnimeDetailsTitle>Anime details</AnimeDetailsTitle>

    <AnimeDetailsLoading v-if="isInitialLoading" />
    <UiErrorMessage v-else-if="error || !data" :error="error" />

    <div v-else class="flex flex-col sm:flex-row gap-4 mt-2">
      <div
        class="h-max w-max mx-auto border-4 border-gray-600 hover:transform hover:scale-105 transition-all shadow-md"
      >
        <img
          :src="data.images.jpg.large_image_url"
          class="w-[250px] sm:w-[300px] sm:min-w-[300px] object-cover"
          alt="Cover"
        />
      </div>

      <div class="w-full flex flex-col px-4 gap-4">
        <div class="w-full flex flex-wrap gap-y-4 justify-between items-center">
          <h2 class="text-2xl font-medium">
            {{ data.title }} {{ data.year ? "(" + data.year + ")" : "" }}
          </h2>

          <div
            class="flex sm:flex-row flex-col gap-4 items-end sm:items-center"
          >
            <div class="ml-auto flex gap-x-2">
              <ElTag
                v-for="genre in data.genres"
                effect="dark"
                type="info"
                class="cursor-default"
              >
                {{ genre.name }}
              </ElTag>
            </div>

            <AnimeRanking :rank="data.rank" />
          </div>
        </div>

        <ElDivider class="!m-0" />

        <div class="w-full flex flex-wrap justify-between">
          <AnimeStatusBadge :status="data.status" />
          <AnimeRating :rating="data.score || 0" />
        </div>

        <p
          class="text-gray-300"
          :innerHTML="
            (data.synopsis || 'No description was found.').replaceAll(
              '\n',
              '</br>'
            )
          "
        ></p>

        <template v-if="characters.data.value">
          <h2 class="text-gray-400 text-xl font-medium">Characters</h2>

          <ElScrollbar class="sm:max-w-[calc(100vw-390px)] w-full">
            <AnimeCharactersList
              :characters="
                charactersList.map((item) => ({
                  imageUrl: item.character.images.jpg.image_url,
                  name: item.character.name,
                }))
              "
            />
          </ElScrollbar>
        </template>
      </div>
    </div>
  </div>
</template>
