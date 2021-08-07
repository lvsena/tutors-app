export class UserInputData {
  name: string;
  cpf: string;
  birthDate: Date;
  gender: string;
  phone: string;
  email: string;

  constructor({ name, cpf, birthDate, gender, phone, email }: {
    name: string;
    cpf: string;
    birthDate: Date;
    gender: string;
    phone: string;
    email: string;
  }) {
    this.name = name;
    this.cpf = cpf;
    this.birthDate = birthDate;
    this.gender = gender;
    this.phone = phone;
    this.email = email;
  }
}
