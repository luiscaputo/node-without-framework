import { IUserEntity } from "../entities/users.entity";
import { PasswordHelpers } from "../helpers/password.helpers";
import { DatabaseRepository } from "../infra/repositories/users.repository";

export class CreateUserService {
  async execute({ name, email, password }: IUserEntity) {
    const userRepository = new DatabaseRepository();

    const userAlreadyExists = await userRepository.execute(
      `SELECT * FROM users WHERE email = '${email}'`
    );

    if (userAlreadyExists.rows[0]) {
      throw new Error("User already exists");
    }

    const user = new IUserEntity({
      name,
      email,
      password: await PasswordHelpers.hashPassword(String(password)),
    });

    await userRepository.execute(
      `INSERT INTO users (id, name, email, password, created_at, updated_at) VALUES ('${user.id}', '${user.name}', '${user.email}', '${user.password}', '${user.created_at}', '${user.updated_at}')`
    );

    return user;
  }
}