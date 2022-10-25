import {Link, useMatch, useResolvedPath} from "react-router-dom";
import "./NavBar.css";

export default function NavBarHome(){
    return <nav className="nav-home">
        <Link to="/" className="site-title">Accueba</Link>
                <ul>
                  <CustomLink to="/">Home</CustomLink> 
                  <CustomLink to="/about">About Accueba</CustomLink> 
                  <CustomLink to="/contact">Contact Us</CustomLink>
                </ul>
    </nav>
}

function CustomLink({ to, childrgen, ...props }) {
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