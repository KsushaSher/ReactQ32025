import AdditionalParameters from '../../components/AdditionalParameters';
import ListCountries from '../../components/CountryList';
import YearSelect from '../../components/YearSelect';
import s from './MainPage.module.scss';

function MainPage() {
  return (
    <div className="wrapper-app">
      <header className={s.header}>
        <h1>CO2 emission data</h1>
        <AdditionalParameters />
        <YearSelect />
      </header>
      <main>
        <ListCountries />
      </main>
    </div>
  );
}

export default MainPage;
