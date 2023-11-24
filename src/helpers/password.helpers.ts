import * as bcryptjs from 'bcryptjs';

export class PasswordHelpers {
  static async hashPassword(password: string) {
    return bcryptjs.hash(password, 10);
  }

  static async comparePassword(password: string, hashedPassword: string) {
    return bcryptjs.compare(password, hashedPassword);
  }
}