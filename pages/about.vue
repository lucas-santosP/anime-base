<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";

const fetcher = async () => {
  await new Promise((resolve) => setTimeout(() => resolve(true), 800));

  return await fetch("https://jsonplaceholder.typicode.com/posts").then((response) =>
    response.json()
  );
};

const { data } = useQuery({ queryKey: ["test"], queryFn: fetcher });
</script>

<template>
  <div>
    <h1>about</h1>
    <p>
      {{ data }}
    </p>
  </div>
</template>
