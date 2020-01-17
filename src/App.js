import React, { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

import UsersTable from "./components/UsersTable";
import Graph from "./components/Graph";
import filterUsers from "./utils/user";
import Header from "./components/Header";

// Styles
const ContentWrapper = styled.div`
  ${tw`h-screen bg-gray-800 pt-24`};
`;

const Container = styled.div`
  ${tw`px-4`}
`;

// React hook for users state and side effects
const useAppUsers = () => {
  // App states
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState({ name: "" });

  // Side effect for fetching user data
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("data/users.json");
      const data = await response.json();

      setUsers(data);
      setLoading(false);
    };

    fetchUsers();
  }, []);

  return { users, loading, filter, setFilter };
};

// Main App
const App = () => {
  const { users, loading, filter, setFilter } = useAppUsers();

  const filteredUsers = filterUsers(users, filter);

  return (
    <>
      <Header setFilter={setFilter} />
      <ContentWrapper>
        <Container>
          {loading && <div>loading...</div>}
          <UsersTable users={filteredUsers} />
          <Graph data={filteredUsers} />
        </Container>
      </ContentWrapper>
    </>
  );
};

export default App;
