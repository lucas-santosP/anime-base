import { apiClient } from "@/services/api";
import { useQuery } from "@tanstack/vue-query";
import { computed, Ref } from "vue";

export function useSearchAnimes(search: Ref<string>) {
  const queryEnabled = computed(() => !!search.value);

  return useQuery({
    queryKey: ["animes", search],
    queryFn: async () => {
      const response = await apiClient.searchAnime({ queries: { q: search.value } });
      return response.data;
    },
    enabled: queryEnabled,
    refetchOnWindowFocus: false,
  });
}
