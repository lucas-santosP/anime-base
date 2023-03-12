import { z } from "zod";
import {
  searchAnimeResponseSchema,
  getAnimeDetailsSchema,
  getAnimeCharactersSchema,
} from "./schemas";
import { Zodios, makeErrors, makeApi } from "@zodios/core";

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
  {
    method: "get",
    path: "/anime/:id/full",
    alias: "getAnimeDetails",
    response: getAnimeDetailsSchema,
    parameters: [{ type: "Path", name: "id", schema: z.number().int() }],
    errors,
  },
  {
    method: "get",
    path: "/anime/:id/characters",
    alias: "getAnimeCharacters",
    response: getAnimeCharactersSchema,
    parameters: [{ type: "Path", name: "id", schema: z.number().int() }],
    errors,
  },
]);

export const apiClient = new Zodios(BASE_URL, endpoints);
