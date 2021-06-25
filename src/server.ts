import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import cors from "cors";

//Se for o index não precisa colocar no caminho, importa o index automático de uma pasta
import "./database";

import { router } from "./routes";

const app = express();

app.use(cors());

app.use(express.json());

app.use(router);

// middleware para tratar erros
// tem que ser colocado depois das rotas para capturar os erros
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({
      error: err.message,
    });
  }

  return res.status(500).json({
    status: "error",
    message: "Internal Server Error",
  });
});

app.listen(3000, () => console.log("Server is running"));
