export class UserInputData {
  name: string;
  cpf: string;
  birthDate: Date;
  gender: string;
  phone: string;
  email: string;
  password: string;

  constructor({
    name,
    cpf,
    birthDate,
    gender,
    phone,
    email,
    password,
  }: {
    name: string;
    cpf: string;
    birthDate: Date;
    gender: string;
    phone: string;
    email: string;
    password: string;
  }) {
    this.name = name;
    this.cpf = cpf;
    this.birthDate = birthDate;
    this.gender = gender;
    this.phone = phone;
    this.email = email;
    this.password = password;
  }
}
