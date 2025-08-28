import { useData } from '../DataContext/Hooks';

const ListCountries = () => {
  const data = useData();

  console.log('data------', data);

  return (
    <>
      <div>{'ListCountries'}</div>
    </>
  );
};

export default ListCountries;
