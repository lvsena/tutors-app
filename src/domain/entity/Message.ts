import { User } from './User';

export class Message {
  private text: string;
  private sendBy: User;
  private dateTime: Date;
  
  constructor(text: string, sendBy: User, dateTime: Date) {
    this.text = text;
    this.sendBy = sendBy;
    this.dateTime = dateTime;
  }
}
