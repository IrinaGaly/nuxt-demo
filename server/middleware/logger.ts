export default defineEventHandler((event) => {
  console.log("New request: " + event.node.req.url);
  if (event.node.req.url == "/api/heey") {
    console.log(
      "Redirecting to somewhere, block user if he is not having correct role....."
    );
  }
});
