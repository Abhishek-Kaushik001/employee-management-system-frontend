function NewTask({
  task,
  user,
  setUser,
  employees,
  setEmployees,
  taskIndex,
}) {

  const handleAcceptTask = () => {

    const updatedTasks = user.tasks.map((item, index) => {
      if (index === taskIndex) {
        return {
          ...item,
          newTask: false,
          active: true,
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
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl">

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

      <div className="mt-6">

        <button
          onClick={handleAcceptTask}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-medium"
        >
          Accept Task
        </button>

      </div>

    </div>
  );
}

export default NewTask;