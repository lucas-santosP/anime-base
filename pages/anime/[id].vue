<script lang="ts" setup>
definePageMeta({ title: "Anime details - Anime Base" });

const route = useRoute();
const router = useRouter();
const animeId = Number(route.params.id);

const { data, isFetching, error, suspense } = useAnimeDetails(animeId);

function goBack() {
  router.back();
}

await suspense();
</script>

<template>
  <div :class="tw('flex flex-col mb-6 p-4')">
    <div :class="tw('flex items-center justify-between mb-6')">
      <h1 :class="tw('text-2xl font-medium')">Anime Details</h1>

      <button @click="goBack" :class="tw('hover:underline px-4')">Go back</button>
    </div>

    <p v-if="isFetching">Loading...</p>
    <UiErrorMessage v-else-if="error || !data" :error="error" />

    <div v-else :class="tw('flex')">
      <div>
        <NuxtImg
          :src="data.images.jpg.large_image_url"
          :placeholder="true"
          :class="tw('w-[250px] min-w-[250px] object-cover')"
          alt="Cover"
        />
      </div>

      <div :class="tw('flex flex-col px-4 gap-4')">
        <h2 :class="tw('text-2xl font-medium')">{{ data.title }}</h2>
        <span
          :class="
            tw([
              'p-2 shadow-lg shadow-transparent bg-gray-600 border-gray-500 hover:shadow-gray-600/40',
              'border rounded-md w-max hover:transition-all cursor-default',
              data.status.includes('Currently Airing') &&
                'bg-green-600 border-green-700 hover:shadow-green-600/40',
            ])
          "
        >
          {{ data.status }}
        </span>

        <p>
          {{ JSON.stringify(data, undefined, 2) }}
        </p>
      </div>
    </div>
  </div>
</template>
