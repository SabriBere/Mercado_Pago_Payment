const express = require("express");
const models = require("./models/index");
const cors = require("cors");

const app = express();
const db = require("./db/db");

// Express Route File Requires
const routes = require("./routes");
app.use(express.json());
app.use(cors());

// Express Routing
app.use("/api", routes);

(async () => {
    await db.sync({ force: false });
    console.log("DB CONNECTED");
    await app.listen(8080, () => {
      console.log("SERVER LISTENING AT PORT 8080");
    });
})();
// db.sync({ force: false })
//     .then(() => {
//         app.listen(8080, (req, res, next) => {
//             console.log("API está viva! 8080");
//         });
// })