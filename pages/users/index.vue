<script setup>
  definePageMeta({
    layout: 'users',
    middleware: ['auth'],

  })

  const { data: users } = await useFetch("/api/users");

</script>
<template>
  <div v-for="user in users" :key="user.id" class="p-4 border-4 grid grid-col-4 gap-5 mb-4">
    <User :user="user"/>
  </div>
</template>
