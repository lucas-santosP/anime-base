<script lang="ts" setup>
import { tw } from "@/utils/tw";
import { InputHTMLAttributes, computed } from "vue";

interface IProps extends InputHTMLAttributes {
  modelValue: string;
  placeholder?: string;
}

const props = defineProps<IProps>();
const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
  (e: "submit"): void;
}>();

const value = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});
</script>

<template>
  <div class="w-full relative">
    <input
      type="text"
      v-bind="props"
      v-model="value"
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
      class="outline-none focus:outline-none focus:ring rounded-r-md bg-none hover:transition-all font-medium h-full px-5 hover:bg-gray-500/40 text-white absolute top-1/2 right-0 transform -translate-y-1/2s"
    >
      Search
    </button>
  </div>
</template>
