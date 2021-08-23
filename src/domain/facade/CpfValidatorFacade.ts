import { cpf } from 'cpf-cnpj-validator';

export class CpfValidatorFacade {
  public static valid(numCpf: string): boolean {
    return cpf.isValid(numCpf);
  }
}
