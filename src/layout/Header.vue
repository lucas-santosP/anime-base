<script lang="ts" setup>
import { tw } from "@/utils/tw";
</script>

<template>
  <div
    :class="
      tw(
        'font-mono tracking-widest text-lg font-medium flex justify-center items-center gap-2 bg-gray-900 py-4 overflow-hidden'
      )
    "
  >
    Anime
    <span :class="tw('uppercase font-bold')">BASE</span>
  </div>
</template>
