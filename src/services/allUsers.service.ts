import { DatabaseRepository } from "../infra/repositories/users.repository";

export class AllUsersService {
  async execute() {
    const userRepository = new DatabaseRepository();

    const users = await userRepository.execute(
      `SELECT * FROM users`
    );

    return users.rows;
  }
}