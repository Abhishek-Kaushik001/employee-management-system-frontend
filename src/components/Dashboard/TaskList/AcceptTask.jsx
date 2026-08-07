function AcceptTask({ task }) {
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
          className="w-1/2 bg-green-600 hover:bg-green-700 text-white py-2 rounded"
        >
          Mark Completed
        </button>

        <button
          className="w-1/2 bg-red-600 hover:bg-red-700 text-white py-2 rounded"
        >
          Mark Failed
        </button>

      </div>

    </div>
  );
}

export default AcceptTask;