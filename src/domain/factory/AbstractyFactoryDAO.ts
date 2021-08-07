import { IUserDAO } from "../dao/IUserDAO";

export interface AbstractFactoryDAO {
    createUserDAO(): IUserDAO;
}