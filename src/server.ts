import "reflect-metadata";
import express from "express";

//Se for o index não precisa colocar no caminho, importa o index automático de uma pasta
import "./database";

import { router } from "./routes";

const app = express();

app.use(express.json());

app.use(router);

app.listen(3000, () => console.log("Server is running"));
