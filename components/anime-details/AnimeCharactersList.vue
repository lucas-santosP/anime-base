<script lang="ts" setup>
type IProps = {
  characters: {
    name: string;
    imageUrl: string;
  }[];
};

const props = defineProps<IProps>();
</script>

<template>
  <div class="w-full flex gap-4 mb-4">
    <div v-for="character in props.characters" class="flex flex-col">
      <img
        :width="150"
        :height="250"
        class="w-[150px] min-w-[150px] object-cover"
        :src="character.imageUrl"
        :alt="character.name"
      />

      <span class="text-center">{{ character.name }}</span>
    </div>
  </div>
</template>
