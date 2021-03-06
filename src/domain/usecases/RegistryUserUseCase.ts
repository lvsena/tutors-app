import { IUserDAO } from '../dao/IUserDAO';
import { User } from '../entity/User';
import { CpfValidatorFacade } from '../facade/CpfValidatorFacade';
import { PasswordCryptoFacade } from '../facade/PasswordCryptoFacade';
import { AbstractFactoryDAO } from '../factory/AbstractyFactoryDAO';
import { UserInputData } from './data/UserInputData';
import { UserOutputData } from './data/UserOutputData';

export class RegistryUserUseCase {
  userDAO: IUserDAO;

  constructor(factoryDAO: AbstractFactoryDAO) {
    this.userDAO = factoryDAO.createUserDAO();
  }

  public async execute(userInput: UserInputData): Promise<UserOutputData> {
    const userCode = (await this.userDAO.getAll()).length + 1;

    if (!CpfValidatorFacade.valid(userInput.cpf)) {
      throw new Error('Cpf is not valid!');
    }

    const user = new User(
      userCode,
      userInput.name,
      userInput.cpf,
      userInput.birthDate,
      userInput.gender,
      userInput.phone,
      userInput.email,
      await PasswordCryptoFacade.crypt(userInput.password),
    );

    return this.userDAO.insert(user);
  }
}
