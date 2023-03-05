<script lang="ts" setup>
import { useAnimeDetails } from "@/queries/useAnimeDetails";
import { tw } from "@/utils/tw";
import { useRoute, useRouter } from "vue-router";
import { useHead } from "@vueuse/head";
import { computed } from "vue";
import UiErrorMessage from "@/components/ui/ErrorMessage.vue";
import AnimeDetailsLoading from "@/components/anime-details/AnimeDetailsLoading.vue";
import AnimeStatusBadge from "@/components/ui/AnimeStatusBadge.vue";
import AnimeDetailsTitle from "@/components/anime-details/AnimeDetailsTitle.vue";

const route = useRoute();
const animeId = Number(route.params.id);

const { data, isInitialLoading, error } = useAnimeDetails(animeId);

useHead({
  title: computed(() => (data.value?.title ? data.value?.title + " details" : "Details")),
});
</script>

<template>
  <div :class="tw('flex flex-col mb-6 p-4')">
    <AnimeDetailsTitle :title="data?.title" :isLoading="isInitialLoading" :error="error" />

    <AnimeDetailsLoading v-if="isInitialLoading" />
    <UiErrorMessage v-else-if="error || !data" :error="error" />

    <div v-else :class="tw('flex')">
      <div>
        <img
          :src="data.images.jpg.large_image_url"
          :width="250"
          :height="350"
          :class="tw('w-[250px] min-w-[250px] object-cover')"
          alt="Cover"
        />
      </div>

      <div :class="tw('flex flex-col px-4 gap-4')">
        <h2 :class="tw('text-2xl font-medium')">{{ data.title }}</h2>

        <AnimeStatusBadge :status="data.status" />

        <p>{{ data.rating }}</p>

        <p>
          {{ JSON.stringify(data, undefined, 2) }}
        </p>
      </div>
    </div>
  </div>
</template>
