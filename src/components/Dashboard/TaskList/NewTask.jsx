function NewTask({ task, user, setUser, employees, setEmployees, taskIndex }) {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 px-3 py-1 rounded text-sm text-white">
          {task.category}
        </h3>

        <h4 className="text-sm text-white">{task.date}</h4>
      </div>

      <h2 className="mt-5 text-2xl font-bold text-white">{task.taskTitle}</h2>

      <p className="text-sm mt-2 text-white">{task.description}</p>

      <div className="mt-6">
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-medium">
          Accept Task
        </button>
      </div>
    </div>
  );
}

export default NewTask;
