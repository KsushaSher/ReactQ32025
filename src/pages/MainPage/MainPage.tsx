import { Suspense, lazy } from 'react';
import Spinner from '../../components/Spinner';

const ListCountries = lazy(() => import('../../components/ListCountries'));

function MainPage() {
  return (
    <div>
      <h1>CO2 emission data</h1>
      <Suspense fallback={<Spinner />}>
        <ListCountries />
      </Suspense>
    </div>
  );
}

export default MainPage;
