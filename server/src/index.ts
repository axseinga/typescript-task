import express from "express";
import routes from "./api/routes";

const app = express();
const port = 3000;

app.use("/api/", routes);

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});
