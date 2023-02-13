import { watch, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

export function useUrlSearchParam(key: string) {
  const route = useRoute();
  const router = useRouter();
  const param = ref("");

  const querySearch = route.query[key];
  if (typeof querySearch === "string") {
    param.value = querySearch;
  }

  watch(
    () => param.value,
    () => {
      if (!param.value) {
        return;
      }

      router.push({
        path: route.path,
        query: { ...route.query, [key]: param.value ? param.value : undefined },
      });
    }
  );

  return param;
}
