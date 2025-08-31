import AdditionalParameters from '../../components/AdditionalParameters';
import ListCountries from '../../components/CountryList';
import CountrySearch from '../../components/CountrySearch';
import SortingCountries from '../../components/SortingCountries';
import YearSelect from '../../components/YearSelect';
import s from './MainPage.module.scss';

function MainPage() {
  return (
    <div className="wrapper-app">
      <header className={s.header}>
        <h1>CO2 emission data</h1>
        <div className={s.options}>
          <YearSelect />
          <CountrySearch />
          <AdditionalParameters />
          <SortingCountries />
        </div>
      </header>
      <main>
        <ListCountries />
      </main>
    </div>
  );
}

export default MainPage;
