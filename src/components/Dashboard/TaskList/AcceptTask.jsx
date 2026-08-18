function AcceptTask({
  task,
  user,
  setUser,
  employees,
  setEmployees,
  taskIndex,
}) {

  const handleCompleteTask = () => {

    const updatedTasks = user.tasks.map((item, index) => {
      if (index === taskIndex) {
        return {
          ...item,
          active: false,
          completed: true,
        };
      }

      return item;
    });

    const updatedUser = {
      ...user,
      tasks: updatedTasks,
    };

    const updatedEmployees = employees.map((employee) => {
      if (employee.id === user.id) {
        return updatedUser;
      }

      return employee;
    });

    setUser(updatedUser);
    setEmployees(updatedEmployees);

    localStorage.setItem(
      "employees",
      JSON.stringify(updatedEmployees)
    );
  };


  const handleFailedTask = () => {

    const updatedTasks = user.tasks.map((item, index) => {
      if (index === taskIndex) {
        return {
          ...item,
          active: false,
          failed: true,
        };
      }

      return item;
    });

    const updatedUser = {
      ...user,
      tasks: updatedTasks,
    };

    const updatedEmployees = employees.map((employee) => {
      if (employee.id === user.id) {
        return updatedUser;
      }

      return employee;
    });

    setUser(updatedUser);
    setEmployees(updatedEmployees);

    localStorage.setItem(
      "employees",
      JSON.stringify(updatedEmployees)
    );
  };


  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl">

      <div className="flex justify-between items-center">

        <h3 className="bg-red-600 px-3 py-1 rounded text-sm text-white">
          {task.category}
        </h3>

        <h4 className="text-sm text-white">
          {task.date}
        </h4>

      </div>

      <h2 className="mt-5 text-2xl font-bold text-white">
        {task.taskTitle}
      </h2>

      <p className="text-sm mt-2 text-white">
        {task.description}
      </p>

      <div className="flex justify-between items-center mt-6 gap-3">

        <button
          onClick={handleCompleteTask}
          className="w-1/2 bg-green-600 hover:bg-green-700 text-white py-2 rounded"
        >
          Mark Completed
        </button>

        <button
          onClick={handleFailedTask}
          className="w-1/2 bg-red-600 hover:bg-red-700 text-white py-2 rounded"
        >
          Mark Failed
        </button>

      </div>

    </div>
  );
}

export default AcceptTask;