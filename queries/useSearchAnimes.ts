import { apiClient } from "@/services/api";
import { useQuery } from "@tanstack/vue-query";
import { throws } from "assert";
import { computed, Ref } from "vue";

export function useSearchAnimes(search: Ref<string>) {
  const queryEnabled = computed(() => !!search.value);

  return useQuery({
    queryKey: ["animes", search],
    queryFn: async () => {
      if (!search.value) return [];

      const response = await apiClient.searchAnime({ queries: { q: search.value } });
      return response.data;
    },
    enabled: queryEnabled,
    staleTime: 30 * 1000,
    refetchOnWindowFocus: false,
  });
}
