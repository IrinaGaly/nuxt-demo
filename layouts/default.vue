<template>
    <header class="shadow-sm bg-slate-300">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/" class="font-bold">
          <NuxtLogo/>
        </NuxtLink>
        <Navbar />
      </nav>
    </header>
    <div class="container mx-auto p-4">
      <slot />
    </div>
</template>
