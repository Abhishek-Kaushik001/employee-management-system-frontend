function AllTask({ employees }) {
  return (
    <div className="w-full overflow-x-auto">
      {/* Header */}
      <div className="min-w-[700px] flex justify-between bg-gray-800 px-4 py-3 rounded">
        <h3 className="w-1/5 text-white font-medium">Employee Name</h3>

        <h3 className="w-1/5 text-white font-medium">New Task</h3>

        <h3 className="w-1/5 text-white font-medium">Active Task</h3>

        <h3 className="w-1/5 text-white font-medium">Completed</h3>

        <h3 className="w-1/5 text-white font-medium">Failed</h3>
      </div>

      {employees.map((emp, index) => {
        const newTask = emp.tasks.filter((task) => task.newTask).length;

        const activeTask = emp.tasks.filter((task) => task.active).length;

        const completedTask = emp.tasks.filter((task) => task.completed).length;

        const failedTask = emp.tasks.filter((task) => task.failed).length;

        return (
          <div
            key={index}
            className="min-w-[700px] border-2 border-emerald-500 py-2 px-4 flex justify-between rounded mb-2"
          >
            <h2 className="w-1/5 text-white">{emp.name}</h2>

            <h3 className="w-1/5 text-blue-400">{newTask}</h3>

            <h3 className="w-1/5 text-yellow-400">{activeTask}</h3>

            <h3 className="w-1/5 text-green-400">{completedTask}</h3>

            <h3 className="w-1/5 text-red-400">{failedTask}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default AllTask;
