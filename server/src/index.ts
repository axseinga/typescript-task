import express from "express";
import compression from "compression";
import cors from "cors";
import routes from "./api/routes";

const app = express();
const port = 3000;

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api/", routes);

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});
