import { DatabaseRepository } from "../infra/repositories/users.repository";

export class GetOneUserService {
  async execute(id: string) {
    const userRepository = new DatabaseRepository();
    const user = await userRepository.execute(
      `SELECT * FROM users WHERE id = ${id}`
    );

    return user ?? "Nenhum usuário encontrado";
  }
}
