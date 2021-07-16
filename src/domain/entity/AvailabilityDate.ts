export class AvailabilityDate {
  private dateTimeStart: Date;
  private dateTimeEnd: Date;
  
  constructor(dateTimeStart: Date, dateTimeEnd: Date) {
    this.dateTimeStart = dateTimeStart;
    this.dateTimeEnd = dateTimeEnd;
  }
}
