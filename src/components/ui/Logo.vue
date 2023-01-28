<script lang="ts" setup>
import { tw } from "@/utils/tw";
</script>

<template>
  <div class="relative group">
    <img
      src="/images/logo.png"
      alt="Anime Base Logo"
      width="442px"
      height="155px"
      :class="tw('w-full max-w-[200px] object-contain relative z-10')"
    />

    <div
      class="transition-all duration-300 absolute w-full h-full bg-primary/50 group-hover:bg-primary/80 rounded-full top-0 left-0 blur-[70px]"
    ></div>
  </div>
</template>
