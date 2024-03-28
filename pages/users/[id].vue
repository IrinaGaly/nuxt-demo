<script setup>
  const { id } = useRoute().params
  const userPosts = ref([]);

  // This useFetch composable is a wrapper around the useAsyncData composable and $fetch utility. 
  const { data: user } = await useFetch(`https://dummyjson.com/users/${id}`)

  if (!user.value) {
    throw createError({ statusCode: 404, statusMessage: "User not found", fatal: true})
  }

  async function seeUserPosts() {
    const { data: posts } = await useFetch(`https://dummyjson.com/users/${id}/posts`)

    userPosts.value = posts.value.posts;
  }

  definePageMeta({
    layout: 'users',
  })
</script>

<template>
  <div>
    <img :src="user.image"/>
    <p>{{ user.email }}</p>
    <p>{{ user.username }}</p>
    <div class="flex">
      <p class="mr-1">{{ user.firstName }}</p>
      <p class="mr-1">{{ user.lastName }}</p>
      <p class="mr-1">{{ user.maidenName }}</p>
      <p>{{ user.age }}</p>
    </div>
    <button class="btn" @click="seeUserPosts">See posts</button>
    <div v-for="post in userPosts">{{ post.title }}</div>
  </div>
</template>
