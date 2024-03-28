<script setup>

const { data } = await useFetch('/api/heey')
</script>

<template>
  <div>
   login
   {{ data }}
   </div>
</template>
