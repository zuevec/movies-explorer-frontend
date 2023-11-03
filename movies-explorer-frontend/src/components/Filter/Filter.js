import './Filter.css';

const Filter = () => {
  return (
    <section className="filter">
      <input type="checkbox" id="checkbox" className="filter__checkbox" />
      <label htmlFor="checkbox" className="filter__label">
        Короткометражки
      </label>
    </section>
  );
};

export default Filter;
