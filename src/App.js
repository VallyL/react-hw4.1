import "./App.css";
import { useState, useCallback, useMemo } from "react";
import UserList from "./components/UserList";

function App() {
  const [filter, setFilter] = useState("");
  const userList = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Peter Jones" },
    { id: 4, name: "Mary Brown" },
  ];

  const filterUsers = useCallback((text) => {
    return userList.filter((user) =>
      user.name.toLowerCase().includes(text.toLowerCase())
    );
  }, []);

  const filteredUsers = useMemo(
    () => filterUsers(filter),
    [filter, filterUsers]
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Filter users ..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <UserList users={filteredUsers} />
    </div>
  );
}

export default App;
