import './Filter.css';

const Filter = ({ isMovieFilter, onFilter }) => {
  return (
    <section className="filter" aria-label="Фильтр">
      <input type="checkbox" id="checkbox" className="filter__checkbox" 
              onChange={onFilter}
              checked={isMovieFilter}/>
      <label htmlFor="checkbox" className="filter__label">
        Короткометражки
      </label>
    </section>
  );
};

export default Filter;
