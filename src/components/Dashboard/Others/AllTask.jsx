function AllTask({ employees }) {
  return (
    <div className="w-full mt-5">

      {/* Header */}
      <div className="flex justify-between items-center bg-gray-800 px-4 py-3 rounded">
        <h3 className="w-1/5 text-white font-medium">
          Employee
        </h3>

        <h3 className="w-1/5 text-white font-medium">
          New
        </h3>

        <h3 className="w-1/5 text-white font-medium">
          Active
        </h3>

        <h3 className="w-1/5 text-white font-medium">
          Complete
        </h3>

        <h3 className="w-1/5 text-white font-medium">
          Failed
        </h3>
      </div>


      {employees.map((emp, index) => {

        const newTask = emp.tasks.filter(task => task.newTask).length;
        const activeTask = emp.tasks.filter(task => task.active).length;
        const completedTask = emp.tasks.filter(task => task.completed).length;
        const failedTask = emp.tasks.filter(task => task.failed).length;

        return (
          <div
            key={index}
            className="flex justify-between items-center border-2 border-emerald-500 py-3 px-4 rounded mb-2"
          >

            <h2 className="w-1/5 text-white text-sm">
              {emp.name}
            </h2>

            <h3 className="w-1/5 text-blue-400 text-center">
              {newTask}
            </h3>

            <h3 className="w-1/5 text-yellow-400 text-center">
              {activeTask}
            </h3>

            <h3 className="w-1/5 text-green-400 text-center">
              {completedTask}
            </h3>

            <h3 className="w-1/5 text-red-400 text-center">
              {failedTask}
            </h3>

          </div>
        );
      })}

    </div>
  );
}

export default AllTask;