<script setup>

const userStore = useUserStore();

definePageMeta({
  middleware: ['auth'],
})

</script>

<template>
   <User :user="userStore.user"/>
</template>