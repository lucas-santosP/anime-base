<script lang="ts" setup>
import { tw } from "@/utils/tw";
import { InputHTMLAttributes } from "vue";

type IProps = InputHTMLAttributes & { value: string };
const props = defineProps<IProps>();
const emit = defineEmits<{
  (e: "input", value: string): void;
  (e: "submit"): void;
}>();
</script>

<template>
  <div :class="tw('w-full relative ')">
    <input
      type="text"
      v-bind="props"
      @input="(e) => emit('input', (e.target as HTMLInputElement).value)"
      :class="
        tw(
          'w-full bg-gray-600 p-2 focus:ring focus:ring-blue-600 focus:outline-none border-2 border-gray-400',
          props.class
        )
      "
    />

    <button
      type="submit"
      :class="
        tw(
          'bg-none h-full px-5 hover:bg-gray-500/40 text-white absolute top-1/2 right-0 transform -translate-y-1/2'
        )
      "
    >
      Submit
    </button>
  </div>
</template>
