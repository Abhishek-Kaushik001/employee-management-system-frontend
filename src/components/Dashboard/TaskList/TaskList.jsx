import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

function TaskList({
  tasks,
  user,
  setUser,
  employees,
  setEmployees,
}) {
  if (!tasks || tasks.length === 0) {
    return (
      <div className="mt-10 text-white text-xl">
        No Tasks Available
      </div>
    );
  }

  return (
    <div
      id="tasklist"
      className="h-[55%] overflow-x-auto flex items-center gap-5 w-full mt-10 py-5 flex-nowrap"
    >
      {tasks.map((task, index) => {
        if (task.newTask) {
          return (
            <NewTask
              key={index}
              task={task}
              taskIndex={index}
              user={user}
              setUser={setUser}
              employees={employees}
              setEmployees={setEmployees}
            />
          );
        }

        if (task.active) {
          return (
            <AcceptTask
              key={index}
              task={task}
              taskIndex={index}
              user={user}
              setUser={setUser}
              employees={employees}
              setEmployees={setEmployees}
            />
          );
        }

        if (task.completed) {
          return (
            <CompleteTask
              key={index}
              task={task}
            />
          );
        }

        if (task.failed) {
          return (
            <FailedTask
              key={index}
              task={task}
            />
          );
        }

        return null;
      })}
    </div>
  );
}

export default TaskList;