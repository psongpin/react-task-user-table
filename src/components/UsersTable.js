import React from "react";
import PropTypes from "prop-types";

const theads = ["Name", "Gender", "Age"];

const UsersTable = ({ users }) => {
  return (
    <table>
      <thead>
        <tr>
          {theads.map(thead => (
            <th key={thead}>{thead}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {users.map(({ id, name, gender, age }) => (
          <tr key={id}>
            <td>{name}</td>
            <td>{gender}</td>
            <td>{age}</td>
          </tr>
        ))}
      </tbody>
    </table>
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
