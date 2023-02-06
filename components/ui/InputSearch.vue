<script lang="ts" setup>
import { tw } from "@/utils/tw";
import { InputHTMLAttributes } from "vue";

interface IProps extends InputHTMLAttributes {
  value: string;
  placeholder?: string;
}

const props = defineProps<IProps>();
const emit = defineEmits<{
  (e: "input", value: string): void;
  (e: "submit"): void;
}>();
</script>

<template>
  <div :class="tw('w-full relative')">
    <input
      type="text"
      v-bind="props"
      @input="(e) => emit('input', (e.target as HTMLInputElement).value)"
      :class="
        tw(
          'w-full bg-gray-700 p-2 rounded-md focus:ring focus:ring-blue-600/70 outline-none focus:outline-none border-2 border-gray-500',
          props.class
        )
      "
    />

    <button
      type="submit"
      @submit="emit('submit')"
      :class="
        tw(
          'outline-none focus:outline-none focus:ring rounded-r-md bg-none hover:transition-all font-medium h-full px-5 hover:bg-gray-500/40 text-white absolute top-1/2 right-0 transform -translate-y-1/2'
        )
      "
    >
      Search
    </button>
  </div>
</template>
