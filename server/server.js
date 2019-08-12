const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;


// Serve static files
app.use(express.static("build"));

// App Set //
const PORT = process.env.PORT || 8080;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
