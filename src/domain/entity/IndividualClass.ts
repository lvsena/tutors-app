import { Class } from './Class';
import { Payment } from './Payment';
import { Student } from './Student';
import { Tutor } from './Tutor';

export class IndividualClass extends Class {
  private student: Student;

  constructor(
    code: number,
    tutor: Tutor,
    student: Student,
    dateTimeInit: Date,
    dateTimeEnd: Date,
    payment: Payment,
  ) {
    super(code, tutor, dateTimeInit, dateTimeEnd, payment);
    this.student = student;
  }
}
