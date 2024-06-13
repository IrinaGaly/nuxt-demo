<script setup>
definePageMeta({
  layout: "empty",
  middleware: ["already-auth"],
});

const userStore = useUserStore();

const signIn = async () => {
  await userStore.signIn({
    // username: 'kminchelle',
    // password: '0lelplR',
    username: "emilys",
    password: "emilyspass",
  });
  await navigateTo("/home", { replace: true });
};
</script>

<template>
  <button type="submit" class="btn" @click="signIn">Login</button>
</template>
