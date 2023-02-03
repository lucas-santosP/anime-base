<script setup lang="ts">
definePageMeta({ title: "Home - Anime Base" });

const input = ref("");
const searchParam = useUrlSearchParam("search");

const { data: animes, error, isInitialLoading } = useSearchAnimes(searchParam);

function handleSubmitSearch(e: Event) {
  searchParam.value = input.value.trim();
}

function handleSelectAnime(id: number) {
  navigateTo({ path: "/anime/" + id });
}

onMounted(() => (input.value = searchParam.value));
</script>

<template>
  <div :class="tw('w-full flex flex-col h-screen overflow-hidden')">
    <form @submit.prevent="handleSubmitSearch" :class="tw('my-5 px-4')">
      <UiInputSearch
        :value="input"
        name="search"
        @input="(value) => (input = value)"
        placeholder="Search an anime..."
      />
    </form>

    <ElScrollbar :class="tw('flex-1')">
      <ul :class="tw('flex flex-col h-full overflow-y-auto pb-8 pt-2 px-4')">
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
