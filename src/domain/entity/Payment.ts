export class Payment {
  private value: number;
  private dateTime: Date;

  constructor({ value, dateTime }: { value: number; dateTime: Date }) {
    this.value = value;
    this.dateTime = dateTime;
  }
}
