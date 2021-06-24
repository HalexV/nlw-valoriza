import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateRequest) {
    const userRepositories = getCustomRepository(UsersRepositories);

    // verificar se email existe
    const user = await userRepositories.findOne({
      email,
    });

    if (!user) throw new Error("Email/Password incorrect");

    // verificar se senha está correta

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) throw new Error("Email/Password incorrect");

    // gerar o token
    const token = sign(
      {
        email: user.email,
      },
      "3e0f810b3b85514116a581e4b16af168",
      {
        subject: user.id,
        expiresIn: "1d",
      }
    );

    return token;
  }
}

export { AuthenticateUserService };
