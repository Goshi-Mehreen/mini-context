import React from "react";
import { useState, useContext } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {setUser} = useContext(UserContext)

  const handleSubmit = (e) => {
  e.preventDefault();

  console.log("Button clicked!");
  console.log(username, password);

  setUser({ username, password });
};
  return (
    
<div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
  <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">

    <h2 className="text-3xl font-bold text-center text-slate-800 mb-2">
      Login
    </h2>

    

    <div className="space-y-5">

      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        className="w-full px-4 py-3 border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
      />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="w-full px-4 py-3 border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
      />

      <button
        onClick={handleSubmit}
        className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-3 rounded-xl transition duration-300 shadow-md"
      >
        Submit
      </button>

    </div>
  </div>
</div>

  );
};

export default Login;
