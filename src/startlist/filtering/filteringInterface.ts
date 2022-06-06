export declare interface FilteringInterface {
  entries: Array<any>;
  filters: FilterInterface;
  handleFilter: React.ChangeEventHandler<HTMLSelectElement>;
  clearFilters: React.MouseEventHandler<HTMLButtonElement>;
}

export declare interface FilterInterface {
  eventTitle: string;
  organiserTitle: string;
}
