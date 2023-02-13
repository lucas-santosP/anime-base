<script setup lang="ts">
import { tw } from "@/utils/tw";
import { RouterLink } from "vue-router";
import UiLogo from "@/components/ui/Logo.vue";
</script>

<template>
  <div
    :class="
      tw(
        'flex justify-between items-center bg-black/30 pt-2 pb-4 shadow-md px-4 overflow-hidden border-b-2 border-primary/60'
      )
    "
  >
    <RouterLink to="/" :class="tw('max-w-[165px] p-1')">
      <UiLogo />
    </RouterLink>

    <ul class="flex gap-4">
      <RouterLink
        to="/"
        class="hover:underline hover:text-primary/70 text-primary hover:transition-all duration-300"
      >
        Home
      </RouterLink>

      <RouterLink
        to="/about"
        class="hover:underline hover:text-primary/70 text-primary hover:transition-all duration-300"
      >
        About
      </RouterLink>
    </ul>
  </div>
</template>
