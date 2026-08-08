import Header from "./Others/Header";
import CreateTask from "./Others/CreateTask";
import AllTask from "./Others/AllTask";

function AdminDashboard({
  user,
  setUser,
  employees,
  setEmployees,
}) {
  return (
   <div className="min-h-screen w-full p-10 bg-[#1c1c1c]">
      <Header
        user={user}
        setUser={setUser}
      />

      <CreateTask
        employees={employees}
        setEmployees={setEmployees}
      />

      <AllTask
        employees={employees}
      />
    </div>
  );
}

export default AdminDashboard;