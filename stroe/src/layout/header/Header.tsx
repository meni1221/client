import { NavLink } from "react-router-dom";



export default function Header() {
  return (
    <>
      <header >
        <h1>stroe missiles</h1>
    <div className="NavLink"> 
    <NavLink to="/">home</NavLink>
    <NavLink to="/missiles">missiles</NavLink>
        <NavLink to="login">Login</NavLink>
        <NavLink to="registr">registr</NavLink>
    </div>
      </header>
    </>
  )
}
