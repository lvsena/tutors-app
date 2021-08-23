export class User {
  code: number;
  password: string;
  name: string;
  cpf: string;
  birthDate: Date;
  gender: string;
  phone: string;
  email: string;

  constructor(
    code: number,
    name: string,
    cpf: string,
    birthDate: Date,
    gender: string,
    phone: string,
    email: string,
    password: string,
  ) {
    this.code = code;
    this.name = name;
    this.cpf = cpf;
    this.birthDate = birthDate;
    this.gender = gender;
    this.phone = phone;
    this.email = email;
    this.password = password;
  }
}
