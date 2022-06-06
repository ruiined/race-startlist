export declare interface EntriesInterface {
  entry: EntryInterface;
}

export declare interface EntryInterface {
  status: "CONFIRMED" | "PENDING";
  firstName: string;
  lastName: string;
  eventTitle: string;
  emailAddress: string;
  raceStartDate: string;
  raceTitle: string;
  organiserTitle: string;
  bookingDate: string;
  ticketTitle: string;
  ticketPrice: {
    value: number;
  };
}
