function FailedTask({ task }) {
  return (
    <div className="w-[260px] h-[230px] bg-red-400 rounded-xl p-4 flex flex-col flex-shrink-0">

      <div className="flex justify-between items-center">
        <h3 className="bg-red-700 text-white px-2 py-1 rounded text-xs">
          {task.category}
        </h3>

        <h4 className="text-xs text-white">
          {task.date}
        </h4>
      </div>

      <h2 className="mt-4 text-2xl font-bold text-white">
        {task.taskTitle}
      </h2>

      <p className="text-xs text-white mt-3">
        {task.description}
      </p>

      <button className="w-full mt-auto bg-gray-800 text-white py-2 rounded-lg">
        Failed
      </button>

    </div>
  );
}

export default FailedTask;