import s from './Spinner.module.scss';

const Spinner = () => {
  return (
    <div className={s['loader-wrapper']} data-testid="spinner">
      <div className={s.loader}></div>
    </div>
  );
};

export default Spinner;
