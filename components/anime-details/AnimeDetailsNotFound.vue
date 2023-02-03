<script lang="ts" setup>
import { tw } from "@/utils/tw";
</script>

<template>
  <div :class="tw('flex justify-center items-center gap-8 bg-gray-800 p-2 overflow-hidden')">
    <div
      :class="
        tw(
          'font-mono pointer-events-none bg-gray-600 border-2 border-gray-700 text-gray-100 rounded-full text-4xl flex justify-center items-center font-bold w-[50px] h-[50px]'
        )
      "
    >
      X
    </div>

    <div :class="tw('font-medium text-lg  text-gray-200')">
      Ops! No item found here, go back to the
      <NuxtLink to="/">search page</NuxtLink>
      .
    </div>
  </div>
</template>
