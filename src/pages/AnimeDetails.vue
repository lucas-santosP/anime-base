<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router";
import { useAnimeDetails } from "@/queries/useAnimeDetails";
import ErrorMessage from "@/components/ui/ErrorMessage.vue";
import { tw } from "@/utils/tw";

const route = useRoute();
const router = useRouter();
const animeId = Number(route.params["id"]);

const { data, isFetching, error } = useAnimeDetails(animeId);

function goBack() {
  router.back();
}
</script>

<template>
  <div :class="tw('flex flex-col mb-6 p-4')">
    <div :class="tw('flex items-center justify-between mb-6')">
      <h1 :class="tw('text-2xl font-medium')">Anime Details</h1>

      <button @click="goBack" :class="tw('hover:underline px-4')">Go back</button>
    </div>

    <p v-if="isFetching">Loading...</p>
    <ErrorMessage v-else-if="error || !data" :error="error" />

    <div v-else :class="tw('flex')">
      <div>
        <img
          :src="data.images.jpg.large_image_url"
          alt="Cover"
          :class="tw('w-[250px] min-w-[250px] object-cover')"
        />
      </div>

      <div :class="tw('flex flex-col px-4 gap-4')">
        <h2 :class="tw('text-2xl font-medium')">{{ data.title }}</h2>
        <span>status: {{ data.status }}</span>

        {{ data }}
      </div>
    </div>
  </div>
</template>

<style scoped></style>
