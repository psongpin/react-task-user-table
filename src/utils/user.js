const filterUsers = (users, filter) => {
  if (!filter.name) return users;

  return users.filter(user => user.name.toLowerCase().includes(filter.name));
};

export default filterUsers;
