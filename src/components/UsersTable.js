import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import tx from "tailwind.macro";

const TableWrapper = styled.div`
  ${tx`w-full overflow-auto`};
  max-height: 500px;
`;

const Table = styled.table`
  ${tx`w-full bg-white text-left rounded`};
`;

const Th = styled.th`
  ${tx`h-12 font-semibold border-b border-gray-400 px-4 bg-gray-300 text-gray-600 text-base`}
`;

const Td = styled.td`
  ${tx`border-b border-gray-400 px-4 py-2 text-gray-800 text-sm`}
`;

const theads = ["Name", "Gender", "Age"];

const UsersTable = ({ users }) => {
  return (
    <TableWrapper>
      <Table>
        <thead>
          <tr>
            {theads.map(thead => (
              <Th key={thead}>{thead}</Th>
            ))}
          </tr>
        </thead>

        <tbody>
          {users.map(({ id, name, gender, age }) => (
            <tr key={id}>
              <Td>{name}</Td>
              <Td>{gender}</Td>
              <Td>{age}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableWrapper>
  );
};

UsersTable.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      gender: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired
    }).isRequired
  ).isRequired
};

export default UsersTable;
