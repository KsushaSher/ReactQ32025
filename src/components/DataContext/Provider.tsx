import { DataContext } from './DataContext';
import { Suspense } from 'react';
import Spinner from '../Spinner';
import getCO2Data from '../../utils/hooks/get-co2-data';

interface DataProviderProps {
  children: React.ReactNode;
}

const dataResource = getCO2Data();

const DataLoader = ({ children }: DataProviderProps) => {
  const data = dataResource.read();

  if (!data) return null;

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export const DataProvider = ({ children }: DataProviderProps) => {
  return (
    <Suspense fallback={<Spinner />}>
      <DataLoader>{children}</DataLoader>
    </Suspense>
  );
};

export default DataProvider;
