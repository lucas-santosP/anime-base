<script setup lang="ts">
import { useHead } from "@vueuse/head";

useHead({ title: "About | Anime Base" });
</script>

<template>
  <div class="flex flex-col mb-6 p-4">
    <h1 class="text-2xl font-medium mb-6">About</h1>

    <article class="flex flex-col gap-4">
      <p>
        This simple site gives you information about your favorite anime shows.
        It was developed using the
        <a href="jikan.moe" target="_blank" class="underline text-primary"
          >Jikan API</a
        >, an open-source API that provides easy access to
        <a
          href="https://myanimelist.net"
          target="_blank"
          class="underline text-primary"
        >
          MyAnimeList.net's</a
        >
        anime and manga data.
      </p>
      <p>
        We also utilized Zodios, a library that helped us to build a scalable
        and maintainable API integration architecture for our site. With Zodios,
        we were able to ensure that our code is well-organized and easy to
        understand, and safe.
      </p>
      <p>
        Furthermore, we used Vue 3, a popular front-end JavaScript framework, to
        create a dynamic and responsive user interface for our site. Vue 3
        allowed us to easily create a seamless and intuitive user experience,
        making it easier for anime fans to navigate our site and find the
        information they need.
      </p>
      <p>
        If you're interested in taking a closer look at our code, you can find
        it on our GitHub repository
        <a
          href="https://github.com/lucas-santosP/anime-base"
          target="_blank"
          class="underline hover:no-underline text-primary"
        >
          here</a
        >.
      </p>
      <p>
        Thank you for visiting our site and we hope that you find our platform
        helpful and informative.
      </p>
    </article>
  </div>
</template>
