import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { EndpointError } from "../utils/EndpointError";

interface IComplimentRequest {
  tag_id: string;
  user_sender: string;
  user_receiver: string;
  message: string;
}

class CreateComplimentService {
  async execute({
    tag_id,
    user_sender,
    user_receiver,
    message,
  }: IComplimentRequest) {
    const complimentsRepositories = getCustomRepository(
      ComplimentsRepositories
    );

    const usersRepositories = getCustomRepository(UsersRepositories);

    if (user_sender === user_receiver)
      throw new EndpointError("Incorrect User Receiver", 400);

    const userReceiverExists = await usersRepositories.findOne(user_receiver);

    if (!userReceiverExists)
      throw new EndpointError("User Receiver does not exist!", 400);

    const compliment = complimentsRepositories.create({
      tag_id,
      user_receiver,
      user_sender,
      message,
    });

    await complimentsRepositories.save(compliment);

    return compliment;
  }
}

export { CreateComplimentService };
