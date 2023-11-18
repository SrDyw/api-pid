import Express from "express";
import router from "./routes/index.routes.js";
import config from './config/index.config.js'

// server init
const app = Express();

// config

// connect();

config();
const PORT = process.env.PORT || 4000;

// middlewares
app.use(Express.json());

// routes
app.get("/", (req, res) => res.redirect("/api"));
app.use("/api", router);

app.listen(PORT, () => {
  console.log("============================[SERVER RESTARTED]==========================================")
  console.log(`Server running on http://localhost:3000`);
});
