export declare interface SortingInterface {
  sort: string;
  order: string;
  handleSort: React.ChangeEventHandler<HTMLSelectElement>;
  handleOrder: React.MouseEventHandler<HTMLButtonElement>;
  clearSort: React.MouseEventHandler<HTMLButtonElement>;
}
