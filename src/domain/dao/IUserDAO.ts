import { User } from "../entity/User";

export interface IUserDAO {
    insert(user: User): Promise<User>;
    getAll(): Promise<User[]>;
    getByCode(code: number): Promise<User>;
    update(user: User): Promise<User>;
}