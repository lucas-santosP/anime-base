<script lang="ts" setup>
import { tw } from "@/utils/tw";

const props = defineProps<{ error: any }>();

function getErrorMessage(error: any) {
  const message = "Ops! Something went wrong, try later.";
  return error?.message || message;
}
</script>

<template>
  <div :class="tw('flex justify-center items-center gap-8 bg-gray-800 p-2 overflow-hidden')">
    <div
      :class="
        tw(
          'pointer-events-none bg-red-600 border-2 border-red-700 text-white rounded-full text-4xl flex justify-center items-center font-bold w-[50px] h-[50px]'
        )
      "
    >
      !
    </div>
    <div :class="tw('font-medium text-lg text-red-600')">
      {{ getErrorMessage(props.error) }}
    </div>
  </div>
</template>
