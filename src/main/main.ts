import { UserController } from '../adapter/controller/UserController';
import { FactoryMemoryDAO } from '../adapter/factory/FactoryMemoryDAO';

export default class Main {
  public static async main(): Promise<void> {
    try {
      const implementationDAO = new FactoryMemoryDAO();
      const userController = new UserController(implementationDAO);

      await userController.create({
        name: 'Leonardo Sena',
        cpf: '123.345.355-67',
        birthDate: '12/12/1999',
        gender: 'M',
        phone: '99 99999-9999',
        email: 'leo@email.com',
      });

      const users = await userController.list();

      console.log(users);
    } catch (error) {
      console.log(error);
    }
  }
}
