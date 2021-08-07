import { Class } from './Class';
import { Payment } from './Payment';
import { Student } from './Student';
import { Tutor } from './Tutor';

export class CollectiveClass extends Class {
  private students: Student[];

  constructor(
    code: number,
    tutor: Tutor,
    students: Student[],
    dateTimeInit: Date,
    dateTimeEnd: Date,
    payment: Payment,
  ) {
    super(code, tutor, dateTimeInit, dateTimeEnd, payment);
    this.students = students;
  }
}
