<script lang="ts" setup>
import { ElTag, ElTooltip } from "element-plus";

const props = defineProps<{ status: string }>();
</script>

<template>
  <ElTag type="info" effect="dark" class="w-max" size="large">
    <span class="text-sm">{{ props.status }}</span>
  </ElTag>
</template>
