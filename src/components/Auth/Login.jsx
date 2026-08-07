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
  <div className="min-h-screen flex items-center justify-center bg-black px-4">
    <div className="w-full max-w-xs bg-zinc-900 p-5 rounded-xl">

      <form onSubmit={submitHandler} className="flex flex-col">

        <input
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="outline-none bg-transparent border-2 border-emerald-600 text-sm py-2 px-4 rounded-full placeholder:text-gray-400 text-white"
          type="email"
          placeholder="Enter your email"
        />

        <input
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="outline-none bg-transparent border-2 border-emerald-600 text-sm py-2 px-4 rounded-full placeholder:text-gray-400 text-white mt-3"
          type="password"
          placeholder="Enter your password"
        />

        <button 
          className="mt-5 text-white bg-emerald-600 hover:bg-emerald-700 text-sm py-2 px-4 w-full rounded-full"
        >
          Log In
        </button>

      </form>

    </div>
  </div>
);
}

export default Login;