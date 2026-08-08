function TaskListNumber({ user }) {

  const newTask = user.tasks.filter((task) => task.newTask).length;
  const activeTask = user.tasks.filter((task) => task.active).length;
  const completedTask = user.tasks.filter((task) => task.completed).length;
  const failedTask = user.tasks.filter((task) => task.failed).length;

  return (

    <div className="grid grid-cols-2 gap-3">

      <div className="rounded-xl py-4 px-4 bg-blue-400">
        <h2 className="text-2xl font-semibold">{newTask}</h2>
        <h3 className="text-sm sm:text-xl font-medium">
          New Task
        </h3>
      </div>


      <div className="rounded-xl py-4 px-4 bg-yellow-400">
        <h2 className="text-2xl font-semibold">{activeTask}</h2>
        <h3 className="text-sm sm:text-xl font-medium">
          Active Task
        </h3>
      </div>


      <div className="rounded-xl py-4 px-4 bg-green-400">
        <h2 className="text-2xl font-semibold">{completedTask}</h2>
        <h3 className="text-sm sm:text-xl font-medium">
          Completed
        </h3>
      </div>


      <div className="rounded-xl py-4 px-4 bg-red-400">
        <h2 className="text-2xl font-semibold">{failedTask}</h2>
        <h3 className="text-sm sm:text-xl font-medium">
          Failed Task
        </h3>
      </div>

    </div>

  );
}

export default TaskListNumber;