<script lang="ts" setup>
import { tw } from "@/utils/tw";
import { useRouter } from "vue-router";

defineProps<{ isLoading?: boolean; error?: unknown; title?: string }>();

const router = useRouter();

function goBack() {
  router.back();
}
</script>
<template>
  <div :class="tw('flex items-center justify-between mb-6')">
    <div v-if="isLoading" class="w-[250px] min-w-[250px] h-[28px] bg-gray-600 animate-pulse"></div>
    <h1 v-else :class="tw('text-2xl font-medium')">
      {{ error || !title ? "Anime Details" : title }}
    </h1>

    <button @click="goBack" :class="tw('hover:underline px-4')">Go back</button>
  </div>
</template>
