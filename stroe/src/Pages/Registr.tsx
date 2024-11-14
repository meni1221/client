import { useState } from "react";
import PageHeader from "../components/PageHeader";
import { useNavigate } from "react-router-dom";

export default function registr() {
  const navigate = useNavigate();

  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [org, setOrganization] = useState("");
  const [location, setLocation] = useState("");

  const Registr = async (
    name: string,
    password: string,
    org: string,
    loction: string,
    resources = []
  ): Promise<boolean> => {
    try {
      const response = await fetch("http://localhost:7700/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // חשוב בשביל קבלת הקוקיז
        body: JSON.stringify({ name, password, org, loction, resources }),
      });

      if (!response.ok) {
        return false;
      } else {
        return true;
      }
    } catch (error) {
      console.error("registr failed", error);
      return false;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    Registr(username, password, org, location);
    console.log(username, password, org, location);

    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <PageHeader title="registr pages" subtitle="" />
      <div>
        <label htmlFor="userName">
          <h3>user Name</h3>
        </label>
        <input
          id="userName"
          type="text"
          value={username}
          placeholder="userName"
          onChange={(event) => setusername(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor="password">
          <h3>password</h3>
        </label>
        <input
          id="password"
          type="password"
          value={password}
          placeholder="password"
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor="OrganizationOp">
          <p>Organization</p>
        </label>
        <select
          id="OrganizationOp"
          value={org}
          onChange={(e) => setOrganization(e.target.value)}
        >
          <option value="IDF">IDF</option>
          <option value="Hezbollah">Hezbollah</option>
          <option value="Hamas">Hamas</option>
          <option value="IRGC">IRGC</option>
          <option value="Houthis">Houthis</option>
        </select>
      </div>

      <div>
        <label htmlFor="Location">
          <h3>Location</h3>
        </label>
        <select
          id="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="North">North</option>
          <option value="South">South</option>
          <option value="Center">Center</option>
          <option value="West Bank">West Bank</option>
        </select>
      </div>

      <button type="submit">registr</button>
    </form>
  );
}
