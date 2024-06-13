<template>
  <ul class="flex gap-4">
    <li>
      <NuxtLink to="/home">Home</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/about">About</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/users" no-prefetch>Users</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/recipes">Recipe of a day</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/" class="btn" @click="userStore.logout">Logout</NuxtLink>
    </li>
  </ul>
</template>

<script setup>
const userStore = useUserStore();
</script>

<style scoped>
.router-link-active {
  color: rgb(94, 216, 131);
}
</style>
