import { z } from "zod";

export const searchAnimeResponseSchema = z.object({
  data: z
    .object({
      mal_id: z.number(),
      title: z.string(),
      type: z.string(),
      images: z.object({
        jpg: z.object({
          image_url: z.string(),
          small_image_url: z.string(),
          large_image_url: z.string(),
        }),
      }),
      aired: z.object({
        from: z.string().optional().nullable(),
        to: z.string().optional().nullable(),
      }),
      genres: z.object({ type: z.string(), name: z.string() }).array(),
    })
    .array(),
  pagination: z.object({
    last_visible_page: z.number(),
    has_next_page: z.boolean(),
    items: z.object({
      count: z.number(),
      total: z.number(),
      per_page: z.number(),
    }),
  }),
});

export const getAnimeDetailsSchema = z.object({
  data: z.object({
    mal_id: z.number(),
    url: z.string(),
    images: z.object({
      jpg: z.object({
        image_url: z.string(),
        small_image_url: z.string(),
        large_image_url: z.string(),
      }),
    }),
    title: z.string(),
    type: z.string(),
    source: z.string(),
    episodes: z.number(),
    status: z.string(),
    airing: z.boolean(),
    aired: z.object({
      from: z.string().nullable(),
      to: z.string().nullable(),
    }),
    duration: z.string(),
    rating: z.string(),
    score: z.number(),
    scored_by: z.number(),
    rank: z.number(),
    popularity: z.number(),
    members: z.number(),
    favorites: z.number(),
    synopsis: z.string(),
    background: z.string(),
    season: z.string(),
    year: z.number(),
    producers: z.array(
      z.object({
        mal_id: z.number(),
        type: z.string(),
        name: z.string(),
        url: z.string().nullable(),
      })
    ),
    studios: z.array(
      z.object({
        mal_id: z.number(),
        type: z.string(),
        name: z.string(),
      })
    ),
    genres: z.array(
      z.object({
        mal_id: z.number(),
        type: z.string(),
        name: z.string(),
      })
    ),
    themes: z.array(
      z.object({
        mal_id: z.number(),
        type: z.string(),
        name: z.string(),
      })
    ),
    demographics: z.array(
      z.object({
        mal_id: z.number(),
        type: z.string(),
        name: z.string(),
      })
    ),
    relations: z.array(
      z.object({
        relation: z.string(),
        entry: z.array(
          z.object({
            mal_id: z.number(),
            type: z.string(),
            name: z.string(),
          })
        ),
      })
    ),
    external: z.array(z.object({ name: z.string(), url: z.string() })),
    streaming: z.array(z.object({ name: z.string(), url: z.string() })),
  }),
});

export type ISearchAnimeResponse = z.infer<typeof searchAnimeResponseSchema>;
export type IGetAnimeDetailsResponse = z.infer<typeof getAnimeDetailsSchema>;