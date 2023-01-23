<script lang="ts" setup>
import { tw } from "@/utils/tw";
import { ref } from "vue";
import InputSearch from "../components/InputSearch.vue";
import { apiClient, ISearchAnimeResponse } from "../services/api";
import { ElScrollbar } from "element-plus";

const search = ref("");
const items = ref<ISearchAnimeResponse["data"]>([]);

async function handleSubmit(e: Event) {
  const response = await apiClient.searchAnime({ queries: { q: search.value } });
  items.value = response.data;
}
</script>

<template>
  <div :class="tw('w-full flex flex-col h-screen overflow-hidden')">
    <form @submit.prevent="handleSubmit" :class="tw('my-5 px-4')">
      <InputSearch
        :value="search"
        name="search"
        @input="(value) => (search = value)"
        placeholder="Search an anime"
      />
    </form>

    <el-scrollbar :class="tw('flex-1')">
      <ul :class="tw('flex flex-col h-full overflow-y-auto pb-8 px-4')">
        <li
          v-for="item in items"
          :class="tw('flex gap-8 hover:bg-gray-700 p-2 cursor-pointer transition-all')"
        >
          <img
            :src="item.images.jpg.image_url"
            alt="Cover"
            :class="tw('w-full max-w-[100px] object-cover')"
          />

          <div :class="tw('flex flex-col')">
            <p :class="tw('font-medium text-lg')">{{ item.title }}</p>
            <p :class="tw('text-gray-300 text-lg')">{{ item.type }}</p>
            <p>{{ item.aired.from && new Date(item.aired.from).toLocaleDateString() }}</p>
          </div>
        </li>
      </ul>
    </el-scrollbar>
  </div>
</template>

<style scoped></style>
