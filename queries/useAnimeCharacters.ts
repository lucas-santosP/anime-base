import { apiClient } from "@/services/api";
import { useQuery } from "@tanstack/vue-query";
import { get, MaybeRef } from "@vueuse/shared";

export function useAnimeCharacters(id: MaybeRef<number>) {
  return useQuery({
    queryKey: ["animes_characters", id],
    queryFn: async () => {
      const response = await apiClient.getAnimeCharacters({ params: { id: get(id) } });
      return response.data;
    },
    refetchOnWindowFocus: false,
    staleTime: 30 * 1000,
    retry: false,
  });
}
