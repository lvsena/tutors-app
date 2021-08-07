import { Payment } from './Payment';
import { Tutor } from './Tutor';

export class Class {
  private tutor: Tutor;
  private code: number;
  private payment: Payment;
  private dateTimeInit: Date;
  private dateTimeEnd: Date;
  private link?: string;

  constructor(
    code: number,
    tutor: Tutor,
    dateTimeInit: Date,
    dateTimeEnd: Date,
    payment: Payment,
  ) {
    this.code = code;
    this.payment = payment;
    this.tutor = tutor;
    this.dateTimeEnd = dateTimeInit;
    this.dateTimeInit = dateTimeEnd;
  }

  public setLink(link: string): void {
    this.link = link;
  }
}
