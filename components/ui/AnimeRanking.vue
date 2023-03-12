<script setup lang="ts">
import { ElTag, ElTooltip } from "element-plus";
import { computed } from "vue";

const props = defineProps<{ rank: number }>();

const type = computed(() => {
  if (props.rank < 10) return "";
  if (props.rank < 100) return "success";
  if (props.rank < 200) return "warning";
  return "danger";
});
</script>

<template>
  <ElTooltip effect="rating" placement="top" :content="`Ranking #${props.rank}`">
    <ElTag effect="dark" :type="type" class="w-full max-w-[80px] cursor-default" size="large">
      <span class="ml-[-5px]">#</span>
      <span class="text-base">{{ rank }}</span>
    </ElTag>
  </ElTooltip>
</template>
