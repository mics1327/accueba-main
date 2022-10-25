import {Link, useMatch, useResolvedPath} from "react-router-dom";
import "./NavBar.css";

export default function NavBarEmp(){
    return <nav className="nav-home">
        <Link to="/" className="site-title">Accueba</Link>
                <ul>
                  <CustomLink to="/EmployeeHome">Employee Homepage</CustomLink> 
                  <CustomLink to="/EmployeeInfo">Employee Information</CustomLink> 
                  <CustomLink to="/Attendance">Attendance</CustomLink>
                  <CustomLink to="/Settings">Settings</CustomLink>
                </ul>
    </nav>
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    )
  }