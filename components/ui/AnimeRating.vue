<script setup lang="ts">
import { StarIcon } from "@heroicons/vue/24/solid";
import { StarIcon as StarIconOutline } from "@heroicons/vue/24/outline";
import { computed } from "vue";
import { ElTooltip } from "element-plus";

const RATING_MAX_SCALE = 5;

const props = defineProps<{ rating: number }>();

function numberToPrecision(num: number, precision: number) {
  return Number(num.toPrecision(precision));
}

const ratingOnMaxScaleRange = computed(() => numberToPrecision(props.rating / 2, 2));

const itemsActivePercent = computed(() => {
  const resultItems: number[] = [];
  const rating = ratingOnMaxScaleRange.value;
  let foundLimit = false;

  for (let index = 0; index < RATING_MAX_SCALE; index++) {
    if (rating === 0) {
      resultItems.push(0);
    } else if (rating > index + 1) {
      resultItems.push(100);
    } else {
      if (foundLimit) {
        resultItems.push(0);
      } else {
        const isDecimal = rating % 1 != 0;
        if (isDecimal) {
          resultItems.push(numberToPrecision(rating - Math.floor(rating), 2) * 100);
        } else {
          resultItems.push(100);
        }
        foundLimit = true;
      }
    }
  }
  return resultItems;
});
</script>

<template>
  <ElTooltip effect="rating" placement="top" :content="`Rating ${ratingOnMaxScaleRange}`">
    <div class="flex w-max py-1 cursor-default">
      <div class="relative w-6 h-6" v-for="activePercent in itemsActivePercent">
        <div
          v-if="activePercent"
          :style="`width: ${activePercent}%;`"
          class="relative w-full h-full overflow-hidden"
        >
          <StarIcon class="star-icon z-[2] absolute left-0 top-0" />
        </div>

        <StarIconOutline class="star-icon z-[1] absolute left-0 top-0 star-icon" />
      </div>
    </div>
  </ElTooltip>
</template>

<style lang="scss">
.el-popper.is-rating {
  @apply bg-gray-500 border-gray-600 text-sm;

  .el-popper__arrow::before {
    @apply bg-gray-500 border-gray-600;
    right: 0;
  }
}

.star-icon {
  @apply w-6 h-6 text-yellow-400;
}
</style>
