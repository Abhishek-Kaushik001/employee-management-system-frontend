import Header from "./Others/Header";
import TaskListNumber from "./Others/TaskListNumber";
import TaskList from "./TaskList/TaskList";

function EmployeeDashboard({
  user,
  setUser,
  employees,
  setEmployees,
}) {
  return (
    <div className="p-10 bg-[#1c1c1c] min-h-screen">
      <Header user={user} setUser={setUser} />

      <TaskListNumber user={user} />

      <TaskList
        tasks={user.tasks}
        user={user}
        setUser={setUser}
        employees={employees}
        setEmployees={setEmployees}
      />
    </div>
  );
}

export default EmployeeDashboard;