<script lang="ts" setup>
import { ElButton } from "element-plus";
import { useRouter } from "vue-router";

const router = useRouter();

function goBack() {
  router.back();
}
</script>
<template>
  <div class="flex items-center justify-between mb-6 pr-4">
    <h1 class="text-2xl font-medium"><slot /></h1>

    <ElButton @click="goBack" effect="dark" type="info">Go back</ElButton>
  </div>
</template>
