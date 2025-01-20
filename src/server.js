const app = require("./app");
const { port } = require("./config/environment");

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

app.use((err, req, res, next) => {
  console.error(err.stack); // Logs detailed error to the console
  res.status(500).json({ error: "Internal Server Error" }); // Responds with a 500 status code
});
