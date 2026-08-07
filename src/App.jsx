import { useState, useEffect } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { setLocalStorage, getLocalStorage } from "./utils/localStorage";

function App() {
  const [user, setUser] = useState(null);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    setLocalStorage();

    const { employees } = getLocalStorage();
    setEmployees(employees);
  }, []);

  return (
    <>
      {!user ? (
        <Login
          setUser={setUser}
          employees={employees}
        />
      ) : user.email === "admin@ems.com" ? (
        <AdminDashboard
          user={user}
          setUser={setUser}
          employees={employees}
          setEmployees={setEmployees}
        />
      ) : (
        <EmployeeDashboard
          user={user}
          setUser={setUser}
           employees={employees}
          setEmployees={setEmployees}

        />
      )}
    </>
  );
}

export default App;