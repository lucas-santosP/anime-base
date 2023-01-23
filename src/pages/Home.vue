<script lang="ts" setup>
import { tw } from "@/utils/tw";
import { ref } from "vue";
import InputSearch from "../components/InputSearch.vue";

const search = ref("");

function handleSubmit(e: SubmitEvent) {
  console.log("api call", search.value);
}
</script>

<template>
  <form :onsubmit.prevent="handleSubmit" :class="tw('p-8')">
    <InputSearch
      :value="search"
      @input="(value) => (search = value)"
      placeholder="Search an anime"
    />
  </form>
</template>

<style scoped></style>
