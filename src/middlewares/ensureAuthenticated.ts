import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // receber token
  const authToken = req.headers.authorization;

  // validar se token está preenchido
  if (!authToken) return res.status(401).end();

  const [, token] = authToken.split(" ");

  // verificar se token é válido
  try {
    const { sub } = verify(token, process.env.SECRET_KEY) as IPayload;

    // recuperar informações do usuário
    req.user_id = sub;
  } catch (err) {
    return res.status(401).end();
  }

  return next();
}
