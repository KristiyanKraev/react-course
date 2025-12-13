import { useState, useEffect } from "react";
import dayjs from "dayjs";
import "./App.css";

function App() {
  const [showPassword, setShowPassword] = useState(false);
  function displayPassword() {
    setShowPassword(!showPassword);
  }

  const [time, setTime] = useState("");
  function handleTime() {
    let now = dayjs().format("HH:mm:ss");
    setTime(now);
  }

  useEffect(() => {
    setInterval(() => {
      handleTime(), 1000;
    });
  }, []);
  return (
    <div>
      <h3 className="text">Hello, welcome to my website </h3>
      <div>
        <input placeholder="Email"></input>
      </div>
      <div>
        <input
          placeholder="Password"
          type={showPassword ? "text" : "password"}
        ></input>
        <button onClick={displayPassword}>Show/Hide password</button>
      </div>

      <div>
        <button>Login</button>
        <button>Sign up</button>
      </div>
      <p>Current time: {time}</p>
    </div>
  );
}

export default App;
