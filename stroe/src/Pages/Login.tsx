import { useState } from "react";
import PageHeader from "../components/PageHeader";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [name, setusername] = useState("");
  const [password, setPassword] = useState("");

  const Login = async (
    name: string,
    password: string,
  ): Promise<boolean> => {
    try {
      const response = await fetch("http://localhost:7700/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // חשוב בשביל קבלת הקוקיז
        body: JSON.stringify({ name, password }),
      });

      if (!response.ok) {
        return false;
      } else {
        return true;
      }
    } catch (error) {
      console.error("login failed", error);
      return false;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    Login(name, password);
    console.log(name, password);

    navigate("/missiles");
  };

  return (
    <form onSubmit={handleSubmit}>
      <PageHeader title="Login pages" subtitle="welcome to Business card app" />
      <div>
        <label htmlFor="userName">
          <p>user Name</p>
        </label>
        <input
          id="userName"
          type="text"
          value={name}
          placeholder="userName"
          onChange={(event) => setusername(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor="password">
          <p>password</p>
        </label>
        <input
          id="password"
          type="password"
          value={password}
          placeholder="password"
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <button type="submit">login</button>
    </form>
  );
}
