import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import tx from "tailwind.macro";

const StyledForm = styled.form`
  ${tx`relative max-w-full`};
  width: 400px;
`;

const NameInput = styled.input`
  ${tx`w-full h-10 rounded pl-4 pr-16 text-gray-500`};
`;

const SubmitButton = styled.button`
  ${tx`w-16 h-10 rounded-none absolute right-0 top-0 z-10 text-xs text-gray-600 font-bold border-l border-gray-400`};
`;

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
    <StyledForm onSubmit={onFormSubmit}>
      <NameInput
        type="text"
        name="name"
        placeholder="Search User"
        onChange={onNameChange}
      />
      <SubmitButton type="submit">Find</SubmitButton>
    </StyledForm>
  );
};

Filter.propTypes = { setFilter: PropTypes.func.isRequired };

export default Filter;
