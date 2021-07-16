import { AcademicCourse } from './AcademicCouse';
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
  ) {
    super(code, name, cpf, birthDate, gender, phone, email);
    this.masteredShcoolContents = masteredShcoolContents;
    this.academicFormation = academicCourses;
  }
}
