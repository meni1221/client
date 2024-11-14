import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <p>Created by Meni Levi &copy;{new Date().getFullYear()}</p>
      <NavLink to={"/"}>חזרה לדף הבית </NavLink>
    </footer>
  );
}
