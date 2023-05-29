export interface IPeopleGrid {
  loading: boolean;
  error: string | undefined;
  data: any;
  handleNext: () => void;
  handlePrevious: () => void
}
