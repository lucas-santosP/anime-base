<script lang="ts" setup>
import { tw } from "@/utils/tw";

const props = defineProps<{ status: string }>();
</script>

<template>
  <span
    :class="
      tw([
        'p-2 shadow-lg shadow-transparent bg-gray-600 border-gray-500 hover:shadow-gray-600/40',
        'border rounded-md w-max hover:transition-all cursor-default',
        {
          'bg-green-600 border-green-700 hover:shadow-green-600/40':
            props.status.includes('Currently Airing'),
        },
      ])
    "
  >
    {{ props.status }}
  </span>
</template>
