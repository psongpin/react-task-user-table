import React, { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import UsersTable from "./components/UsersTable";

// Styles

const PageWrapper = styled.div`
  ${tw`h-screen bg-gray-800`};
`;

const Container = styled.div`
  ${tw`px-4`}
`;

// React hook for users state and side effects
const useAppUsers = () => {
  // App states
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return { users, loading };
};

// Main App
const App = () => {
  const { users, loading } = useAppUsers();

  return (
    <PageWrapper>
      <Container>
        {loading ? <div>loading...</div> : <UsersTable users={users} />}
      </Container>
    </PageWrapper>
  );
};

export default App;
