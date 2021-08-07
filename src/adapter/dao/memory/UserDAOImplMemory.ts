import { IUserDAO } from '../../../domain/dao/IUserDAO';
import { User } from '../../../domain/entity/User';

export class UserDAOImplMemory implements IUserDAO {
  private users: User[];

  constructor() {
    this.users = [];
  }

  public async getAll(): Promise<User[]> {
    return this.users;
  }

  public async getByCode(code: number): Promise<User> {
    const user = await this.users.find((user: User) => code === user.code);
    if (!user) throw new Error('User not found!');
    return user;
  }

  public async insert(user: User): Promise<User> {
    try {
      this.users.push(user);
      return this.getByCode(user.code);
    } catch (error) {
      throw new Error('Erro when saving user');
    }
  }

  public async update(user: User): Promise<User> {
    const oldDataUser = await this.getByCode(user.code);
    const updatedUser = new User(
      oldDataUser.code,
      user.name,
      user.cpf,
      user.birthDate,
      user.gender,
      user.phone,
      user.email,
    );

    return updatedUser;
  }
}
