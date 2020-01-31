import React, { useState, useEffect } from "react";
import { useForm } from "./useForm";
import { useFetch } from "./useFetch";
import "./App.css";

const App = () => {
  const [values, handleChange] = useForm({ email: "", password: "" });
  const [count, setCount] = useState(() => {
    JSON.parse(localStorage.getItem("count"));
  });
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);
  return (
    <div>
      <div>{loading ? "...loading" : data}</div>
      <div>{count}</div>
      <button onClick={() => setCount(count => count + 1)}>Increment</button>
      <input
        name="email"
        type="email"
        value={values.email}
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
    </div>
  );
};

export default App;
