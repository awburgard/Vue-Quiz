const express = require("express");
const app = express();

// Serve static files
app.use(express.static("dist"));

// App Set //
const PORT = process.env.PORT || 8080;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
