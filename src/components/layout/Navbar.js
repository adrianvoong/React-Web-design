import { NavLink } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  return (
    <nav>
      <div className="navItem">
        <NavLink to="/Assessments">Assignments</NavLink>
      </div>

      <div className="navItem">
        <NavLink to="/student">Students</NavLink>
      </div>

      <div className="navItem">
        <NavLink to="/FavStudents">favourite</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
