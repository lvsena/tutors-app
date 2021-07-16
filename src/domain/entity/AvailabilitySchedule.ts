import { AvailabilityDate } from "./AvailabilityDate";

export class AvailabilitySchedule {
  private availabilityDates: AvailabilityDate[];

  constructor(availabilityDates: AvailabilityDate[]) {
    this.availabilityDates = availabilityDates;
  }
}
