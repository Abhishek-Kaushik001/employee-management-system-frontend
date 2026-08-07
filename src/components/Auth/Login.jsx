import { useState } from "react";

function Login({ setUser, employees }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (email === "admin@ems.com" && password === "123") {
      setUser({
        email: "admin@ems.com",
      });
      return;
    }

    const employee = employees.find(
      (emp) => emp.email === email && emp.password === password
    );

    if (employee) {
      setUser(employee);
    } else {
      alert("Invalid Credentials");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[#1c1c1c]">
      <div className="border-2 border-emerald-600 p-20 rounded-xl">
        <form
          onSubmit={submitHandler}
          className="flex flex-col items-center justify-center"
        >
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400 text-white"
            type="email"
            placeholder="Enter your email"
          />

          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400 text-white mt-5"
            type="password"
            placeholder="Enter your password"
          />

          <button className="mt-7 text-white border-none outline-none bg-emerald-600 hover:bg-emerald-700 text-xl py-3 px-5 w-full rounded-full">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;