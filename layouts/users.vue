<template>
  <header class="shadow-sm bg-white">
    <nav class="container mx-auto p-4 flex justify-between">
      <NuxtLink to="/" class="font-bold">Nuxt users</NuxtLink>
    </nav>
  </header>
  <div  class="container mx-auto p-4">
    <slot />
  </div>

  <footer class="container mx-auto p-4 flex justify-between border-t-2">
    <Navbar />
  </footer>
</template>
