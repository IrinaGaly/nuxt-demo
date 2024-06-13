export default defineEventHandler(async (event) => {
  const { id } = event.context.params;
  // console.log("event", event);
  console.log("id", id);
  const { apiKey } = useRuntimeConfig();
  console.log("apiKey", apiKey);
  const response = await $fetch(`https://dummyjson.com/recipes/${id}`);
  // console.log("response", response);

  return response;
});
