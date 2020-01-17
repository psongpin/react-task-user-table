import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import tx from "tailwind.macro";

import Filter from "./Filter";

const HeaderWrapper = styled.header`
  ${tx`h-16 bg-green-400 flex items-center justify-center fixed top-0 left-0 right-0 shadow-lg`}
`;

const Header = ({ setFilter }) => {
  return (
    <HeaderWrapper>
      <Filter setFilter={setFilter} />
    </HeaderWrapper>
  );
};

Header.propTypes = { setFilter: PropTypes.func.isRequired };

export default Header;
