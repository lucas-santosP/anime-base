import { watch, ref } from "vue";
import { useRoute, useRouter, LocationQuery } from "vue-router";

export function useUrlSearchParam(key: string) {
  const router = useRouter();
  const route = useRoute();
  const param = ref("");

  const querySearch = route.query[key];
  if (typeof querySearch === "string") {
    param.value = querySearch;
  }

  function getQueryParamsObject(query: LocationQuery) {
    const queryParams: Record<string, string> = {};

    Object.keys(query).forEach((key) => {
      const value = query[key];
      if (typeof value === "string") {
        queryParams[key] = value;
      }
    });

    return queryParams;
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

      const queryParams = new URLSearchParams(getQueryParamsObject(route.query));

      if (queryParams.has(key)) {
        if (!param.value) queryParams.delete(key);
        else queryParams.set(key, param.value);
      } else if (!!param.value) {
        queryParams.append(key, param.value);
      }

      const stringParams = queryParams.toString();
      router.push(route.path + `${stringParams ? "?" + stringParams : ""}`);
    }
  );

  return param;
}
