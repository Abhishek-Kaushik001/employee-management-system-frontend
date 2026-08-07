import { useState } from "react";

function CreateTask({ employees, setEmployees }) {
  const [taskTitle, setTaskTitle] = useState("");
  const [date, setDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      taskTitle,
      date,
      assignTo,
      category,
      description,
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    };

    const updatedEmployees = employees.map((emp) => {
      if (emp.name === assignTo) {
        return {
          ...emp,
          tasks: [...emp.tasks, newTask],
        };
      }
      return emp;
    });

    setEmployees(updatedEmployees);
    localStorage.setItem(
      "employees",
      JSON.stringify(updatedEmployees)
    );

    setTaskTitle("");
    setDate("");
    setAssignTo("");
    setCategory("");
    setDescription("");

    alert("Task Created Successfully");
  };

  return (
    <div className="mt-10 bg-[#2c2c2c] p-5 rounded">
      <form
        onSubmit={handleSubmit}
        className="flex justify-between gap-10"
      >
        {/* Left Side */}
        <div className="w-1/2">
          <div className="mb-4">
            <h3 className="text-sm text-gray-300 mb-2">
              Task Title
            </h3>

            <input
              type="text"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              placeholder="Make a UI Design"
              className="w-full text-sm py-2 px-3 rounded bg-transparent border border-gray-500 text-white outline-none"
            />
          </div>

          <div className="mb-4">
            <h3 className="text-sm text-gray-300 mb-2">
              Date
            </h3>

            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full text-sm py-2 px-3 rounded bg-transparent border border-gray-500 text-white outline-none"
            />
          </div>

          <div className="mb-4">
            <h3 className="text-sm text-gray-300 mb-2">
              Assign To
            </h3>

            <input
              type="text"
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              placeholder="Employee Name"
              className="w-full text-sm py-2 px-3 rounded bg-transparent border border-gray-500 text-white outline-none"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-2">
              Category
            </h3>

            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Design, Dev, etc."
              className="w-full text-sm py-2 px-3 rounded bg-transparent border border-gray-500 text-white outline-none"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="w-1/2 flex flex-col">
          <h3 className="text-sm text-gray-300 mb-2">
            Description
          </h3>

          <textarea
            rows="10"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter task description..."
            className="w-full p-3 rounded bg-transparent border border-gray-500 text-white outline-none resize-none"
          ></textarea>

          <button
            type="submit"
            className="mt-5 w-full bg-emerald-500 hover:bg-emerald-600 py-3 rounded text-white font-semibold"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateTask;