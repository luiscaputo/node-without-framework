import { randomUUID } from 'crypto';

export class IUserEntity {
  id?: string;
  name?: string;
  email?: string;
  password?: string;
  created_at?: Date;
  updated_at?: Date;

  constructor(props: IUserEntity) {
    if (!this.id) {
      this.id = randomUUID();
    }
    if (!this.created_at) {
      this.created_at = new Date();
    }
    if (!this.updated_at) {
      this.updated_at = new Date();
    }
    Object.assign(this, props);
  }
}