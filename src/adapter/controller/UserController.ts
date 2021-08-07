import { AbstractFactoryDAO } from '../../domain/factory/AbstractyFactoryDAO';
import { UserInputData } from '../../domain/usecases/data/UserInputData';
import { UserOutputData } from '../../domain/usecases/data/UserOutputData';
import { ListAllUsersUseCase } from '../../domain/usecases/ListAllUsersUseCase';
import { RegistryUserUseCase } from '../../domain/usecases/RegistryUserUseCase';

export class UserController {
  private factoryDAO: AbstractFactoryDAO;

  constructor(factoryDAO: AbstractFactoryDAO) {
    this.factoryDAO = factoryDAO;
  }

  async create(data: any): Promise<UserOutputData> {
    const registryUserUseCase = new RegistryUserUseCase(this.factoryDAO);
    const newUser = new UserInputData(data);
    return registryUserUseCase.execute(newUser);
  }

  async list(): Promise<UserOutputData[]> {
    const listAllUsersUseCase = new ListAllUsersUseCase(this.factoryDAO);
    return listAllUsersUseCase.execute();
  }
}
