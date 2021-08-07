import { IUserDAO } from '../../domain/dao/IUserDAO';
import { AbstractFactoryDAO } from '../../domain/factory/AbstractyFactoryDAO';
import { UserDAOImplMemorySingleton } from '../dao/memory/UserDAOImplMemorySingleton';

export class FactoryMemoryDAO implements AbstractFactoryDAO {
  createUserDAO(): IUserDAO {
    return UserDAOImplMemorySingleton.getInstance();
  }
}
