import {Link, useMatch, useResolvedPath} from "react-router-dom";
import "./NavBar.css";

export default function NavBarAdm(){
    return <nav className="nav-home">
        <Link to="/" className="site-title">Accueba</Link>
                <ul>
                  <CustomLink to="/EmployeeInfo">Employee Information</CustomLink>
                  <CustomLink to="/Transactions">Transactions</CustomLink> 
                  <CustomLink to="/Payroll">Payroll</CustomLink>
                  <CustomLink to="/Attendance Monitoring">Attendance Monitoring</CustomLink>
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