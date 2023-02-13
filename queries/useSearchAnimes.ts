import { apiClient } from "@/services/api";
import { MaybeRef } from "@/types";
import { useQuery } from "@tanstack/vue-query";
import { get } from "@vueuse/shared";
import { computed } from "vue";

export function useSearchAnimes(search: MaybeRef<string>) {
  const queryEnabled = computed(() => !!get(search));

  return useQuery({
    queryKey: ["animes", search],
    queryFn: async () => {
      const response = await apiClient.searchAnime({ queries: { q: get(search) } });
      return response.data;
    },
    enabled: queryEnabled,
    staleTime: 30 * 1000,
    refetchOnWindowFocus: false,
  });
}
