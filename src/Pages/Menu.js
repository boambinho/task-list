import { Outlet, Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <nav className="navbar">
        <Link to="/"> Home Page </Link>

        <Link to="/task_list"> Tu lista de tareas </Link>

        <Link to="/about"> About Us </Link>
      </nav>

      <Outlet />
    </>
  );
};

export default Menu;
