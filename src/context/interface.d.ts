export interface IData {
  name: string;
  height: string;
  mass: string;
  gender: boolean;
  homeworld: string;
}
export type DataContextType = {
  data: IData| undefined;
  holdData: (data: IData) => void;
};