import Express from "express";
import router from "./routes/index.routes.js";

const app = Express();

app.use(router);



app.listen(3000, () => {
    console.log(`Server on port ${3000}`);
})

