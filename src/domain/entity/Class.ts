import { Payment } from './Payment';
import { Tutor } from './Tutor';

export class Class {
  private tutor: Tutor;
  private payment: Payment;
  private dateTimeInit: Date;
  private dateTimeEnd: Date;
  private link?: string;

  constructor(
    tutor: Tutor,
    dateTimeInit: Date,
    dateTimeEnd: Date,
    payment: Payment,
  ) {
    this.payment = payment;
    this.tutor = tutor;
    this.dateTimeEnd = dateTimeInit;
    this.dateTimeInit = dateTimeEnd;
  }

  public setLink(link: string): void {
    this.link = link;
  }
}
