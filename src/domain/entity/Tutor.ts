import { AcademicCourse } from './AcademicCourse';
import { MasteredSchoolContent } from './MasteredSchoolContent';
import { User } from './User';

export class Tutor extends User {
  academicFormation: AcademicCourse[];
  description?: string;
  masteredShcoolContents: MasteredSchoolContent[];

  constructor(
    masteredShcoolContents: MasteredSchoolContent[],
    academicCourses: AcademicCourse[],
    code: number,
    name: string,
    cpf: string,
    birthDate: Date,
    gender: string,
    phone: string,
    email: string,
    password: string
  ) {
    super(code, name, cpf, birthDate, gender, phone, email, password);
    this.masteredShcoolContents = masteredShcoolContents;
    this.academicFormation = academicCourses;
  }
}
