import { IUserDAO } from '../dao/IUserDAO';
import { AbstractFactoryDAO } from '../factory/AbstractyFactoryDAO';
import { UserOutputData } from './data/UserOutputData';

export class ListAllUsersUseCase {
  userDAO: IUserDAO;

  constructor(factoryDAO: AbstractFactoryDAO) {
    this.userDAO = factoryDAO.createUserDAO();
  }

  public async execute(): Promise<UserOutputData[]> {
    const users = await this.userDAO.getAll();

    const usersOutput = users.map((user) => {
      return new UserOutputData({
        code: user.code,
        name: user.name,
        cpf: user.cpf,
        birthDate: user.birthDate,
        gender: user.gender,
        phone: user.phone,
        email: user.email,
      });
    });

    return usersOutput;
  }
}
