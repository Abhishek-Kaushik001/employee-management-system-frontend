const employees = [
  {
    id: 1,
    name: "Rahul",
    email: "rahul@gmail.com",
    password: "123",
    tasks: [],
  },
  {
    id: 2,
    name: "Aman",
    email: "aman@gmail.com",
    password: "123",
    tasks: [],
  },
  {
    id: 3,
    name: "Priya",
    email: "priya@gmail.com",
    password: "123",
    tasks: [],
  },
  {
    id: 4,
    name: "Rohit",
    email: "rohit@gmail.com",
    password: "123",
    tasks: [],
  },
  {
    id: 5,
    name: "Sneha",
    email: "sneha@gmail.com",
    password: "123",
    tasks: [],
  },
];

const admin = {
  id: 1,
  email: "admin@ems.com",
  password: "123",
};

const setLocalStorage = () => {
  if (!localStorage.getItem("employees")) {
    localStorage.setItem("employees", JSON.stringify(employees));
  }

  if (!localStorage.getItem("admin")) {
    localStorage.setItem("admin", JSON.stringify(admin));
  }
};

const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return {
    employees,
    admin,
  };
};

export { setLocalStorage, getLocalStorage };