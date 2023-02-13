<script lang="ts" setup>
import { tw } from "@/utils/tw";

const props = defineProps<{ width?: string; repeat?: number }>();
const repeat = props.repeat || 1;

function getRandomInt(min: number, max: number): number {
  return Math.round(Math.random() * (max - min) + min);
}
</script>

<template>
  <div
    v-for="_rp in repeat"
    :style="{ width: props.width ? props.width + 'px' : 'full' }"
    :class="tw('flex gap-8 bg-gray-800 p-2 overflow-hidden')"
  >
    <div :class="tw('w-[100px] min-w-[100px] h-[130px] bg-gray-600 animate-pulse')"></div>

    <div :class="tw('flex flex-col w-full gap-2')">
      <div class="bg-gray-600 animate-pulse h-[20px] min-w-[150px] w-[50%]"></div>
      <div class="bg-gray-600 animate-pulse h-[20px] w-[20%]"></div>
      <div class="bg-gray-600 animate-pulse h-[20px] min-w-[40px] w-[10%]"></div>
      <div :class="tw('flex gap-2 mt-auto')">
        <div
          v-for="_i in getRandomInt(0, 3)"
          class="bg-gray-600 animate-pulse h-[25px] w-[60px]"
        ></div>
      </div>
    </div>
  </div>
</template>
