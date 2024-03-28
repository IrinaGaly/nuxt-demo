<template>
  <NuxtLink v-if="user" :to="`/users/${user.id}`">
    <h3 class="font-bold">{{ user.firstName }} {{ user.lastName }}</h3>
    <p>{{ user.email }}</p>
    <p>{{ user.phone }}</p>
  </NuxtLink>
</template>

<script setup>
const { user } = defineProps(['user']);
</script>