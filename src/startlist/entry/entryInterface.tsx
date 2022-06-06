export declare interface EntryInterface {
  entry: {
    status: "CONFIRMED" | "PENDING";
    firstName: string;
    lastName: string;
    eventTitle: string;
    raceStartDate: string;
    raceTitle: string;
    organiserTitle: string;
    bookingDate: string;
    ticketTitle: string;
    ticketPrice: {
      value: number;
      fee: number;
      currencyCode: string;
    };
  };
}