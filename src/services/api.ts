import { Zodios, makeErrors, makeApi } from "@zodios/core";
import z from "zod";

const BASE_URL = "https://api.jikan.moe/v4/";

const errors = makeErrors([
  {
    status: "default",
    schema: z.object({
      status: z.string(),
      type: z.string(),
      message: z.string(),
      error: z.string(),
      report_url: z.string(),
    }),
  },
]);

const searchAnimeResponseSchema = z.object({
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

export type ISearchAnimeResponse = z.infer<typeof searchAnimeResponseSchema>;

const endpoints = makeApi([
  {
    method: "get",
    path: "/anime",
    alias: "searchAnime",
    response: searchAnimeResponseSchema,
    parameters: [
      { type: "Query", name: "q", schema: z.string() },
      { type: "Query", name: "limit", schema: z.number().int().optional().default(5) },
      { type: "Query", name: "page", schema: z.number().int().optional() },
    ],
    errors,
  },
]);

export const apiClient = new Zodios(BASE_URL, endpoints);
