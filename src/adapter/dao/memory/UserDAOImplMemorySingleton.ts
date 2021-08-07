/* eslint-disable @typescript-eslint/no-empty-function */
import { IUserDAO } from '../../../domain/dao/IUserDAO';
import { UserDAOImplMemory } from './UserDAOImplMemory';

export class UserDAOImplMemorySingleton {
  static instance: IUserDAO | undefined;

  private constructor() {}

  static getInstance(): IUserDAO {
    if (!UserDAOImplMemorySingleton.instance) {
      UserDAOImplMemorySingleton.instance = new UserDAOImplMemory();
    }
    return UserDAOImplMemorySingleton.instance;
  }

  static destroy(): void {
    UserDAOImplMemorySingleton.instance = undefined;
  }
}
