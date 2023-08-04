import React from "react";

const Searchbar = ({ searchbar }) => {
  const handleChange = (event) => {
    const value = event.target.value;
    searchbar(value);
  };

  return (
    <div className="Searchbar">
      <div>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Search students..."
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Searchbar;
