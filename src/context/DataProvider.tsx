import * as React from 'react';
import { IData, DataContextType } from './interface';

export const DataContext = React.createContext<DataContextType | null>(null);

const DataProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [data, setData] = React.useState<IData>();
  const holdData = (person: IData) => {
    setData(person);
  };

  return <DataContext.Provider value={{ data, holdData }}>{children}</DataContext.Provider>;
};

export default DataProvider;
