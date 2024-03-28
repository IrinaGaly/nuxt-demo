export default defineEventHandler(async () => {
  const response = await fetch("https://dummyjson.com/users");
  const data = await response.json();
  console.log(data.users);

  return data.users;
});
