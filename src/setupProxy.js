const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy("/api", {
      target: "https://api.elevio-staging.com/v1",
      changeOrigin: true,
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "46a396b4f023526b0dbdd02ff2ffdd6c",
        Authorisation:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwcC5lbGV2aW8tc3RhZ2luZy5jb20iLCJzdWIiOiI1ZDUzODdmYjk3ODAwIiwiZXhwIjozMTQyNTU1OTE5LCJpYXQiOjE1NjU3NTU5MTksImp0aSI6IjJhbThsZnVodXNpNzRqbXVyZWF1NGwyM2p1cHNldG5rIiwKICAidXNlck5hbWUiIDogInRjd2lsbGlzMUBnbWFpbC5jb20iLAogICJ1c2VySWQiIDogMTMwNzUsCiAgInNjb3BlIiA6IFsgInJlYWQ6YXJ0aWNsZSIgXQp9.3pBaBID01LMKvjgf6PXsdBS4EtL-Z4N8K2BZCubXcZg"
      },
      pathRewrite: {
        "^/api": ""
      }
    })
  );
};
