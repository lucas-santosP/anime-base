<script lang="ts" setup>
import Logo from "@/components/ui/Logo.vue";
import { tw } from "@/utils/tw";
import { RouterLink } from "vue-router";
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
      <Logo />
    </RouterLink>

    <RouterLink
      to="/#"
      class="hover:underline hover:text-primary/70 text-primary transition-all duration-300"
    >
      About
    </RouterLink>
  </div>
</template>
