// FilterButtons.js
import "./FilterButton.scss";

const FilterButtons = ({ onFilterChange }) => {
  const handleFilterChange = (event) => {
    onFilterChange(event.target.value);
  };

  return (
    <div className="Filter">
      <select onChange={handleFilterChange}>
        <option value="Liked">Liked</option>
        <option value="Disliked">Disliked</option>
        <option value="All">Reset</option>
      </select>
    </div>
  );
};

export default FilterButtons;
