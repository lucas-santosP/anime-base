import { watch, ref } from "vue";

export function useUrlSearchParam(key: string) {
  const route = useRoute();
  const param = ref("");

  const querySearch = route.query[key];
  if (typeof querySearch === "string") {
    param.value = querySearch;
  }

  function isEmptyObject(obj: object | Record<any, any>) {
    return !!Object.keys(obj).length;
  }

  watch(
    () => param.value,
    () => {
      if (!param.value && !isEmptyObject(route.query)) {
        return;
      }

      navigateTo({
        path: route.path,
        query: { ...route.query, [key]: param.value ? param.value : undefined },
      });
    }
  );

  return param;
}
