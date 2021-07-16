import { Message } from './Message';
import { Student } from './Student';
import { Tutor } from './Tutor';

export class Chat {
  private student: Student;
  private tutor: Tutor;
  private messages?: Message[];
  
  constructor(student: Student, tutor: Tutor) {
      this.student = student;
      this.tutor = tutor
  }
}
