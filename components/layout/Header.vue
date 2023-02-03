<template>
  <div
    :class="
      tw(
        'flex justify-between items-center bg-black/30 pt-2 pb-4 shadow-md px-4 overflow-hidden border-b-2 border-primary/60'
      )
    "
  >
    <NuxtLink to="/" :class="tw('max-w-[165px] p-1')">
      <UiLogo />
    </NuxtLink>

    <ul class="flex gap-4">
      <NuxtLink
        to="/"
        class="hover:underline hover:text-primary/70 text-primary transition-all duration-300"
      >
        Home
      </NuxtLink>

      <NuxtLink
        to="/about"
        class="hover:underline hover:text-primary/70 text-primary transition-all duration-300"
      >
        About
      </NuxtLink>
    </ul>
  </div>
</template>
