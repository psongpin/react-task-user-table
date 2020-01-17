import React, { useState } from "react";
import PropTypes from "prop-types";

const Filter = ({ setFilter }) => {
  const [name, setName] = useState("");

  // Form handlers (submit and input change)
  const onNameChange = event => {
    setName(event.target.value.toLowerCase());
  };

  const onFormSubmit = event => {
    event.preventDefault();
    setFilter({ name });
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Search User"
        onChange={onNameChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

Filter.propTypes = { setFilter: PropTypes.func.isRequired };

export default Filter;
