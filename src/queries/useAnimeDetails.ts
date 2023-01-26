import { apiClient } from "@/services/api";
import { useQuery } from "@tanstack/vue-query";
import { get, MaybeRef } from "@vueuse/shared";

export function useAnimeDetails(id: MaybeRef<number>) {
  return useQuery({
    queryKey: ["animes_details", id],
    queryFn: async () => {
      const response = await apiClient.getAnimeDetails({ params: { id: get(id) } });
      return response.data;
    },
    refetchOnWindowFocus: false,
    staleTime: 30 * 1000,
  });
}
