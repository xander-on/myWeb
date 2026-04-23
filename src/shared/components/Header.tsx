import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom"
// import { SwitchTheme } from "../SwitchTheme/SwitchTheme";

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark px-3">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Alexander<span className="web">Web</span>
        </Link>

        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-collapse collapse justify-content-end" id="navbarNav">
          <div className="navbar-nav">
              
            {/* <CustomNavLink to="/tutorials"  label="Tutorials" /> */}
            <CustomNavLink to="/projects"     label="Projects" />
            <CustomNavLink to="/contact"      label="Contact" />
            <CustomNavLink to="/certificates" label="Certificates" />
            <CustomNavLink to="/cv"           label="CV" />

            <div className="navbar-actions">
              {/* <SwitchTheme /> */}
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
}



interface CustomNavLinkProps {
  to: string;
  label: string;
}



const CustomNavLink = ({ to, label }: CustomNavLinkProps) => {

  const getNavLinkClass = ({ isActive }: { isActive: boolean }) => {
    return `nav-link nav-item ${isActive ? ' active' : ''}`;
  };

  return (
    <NavLink 
      className={ getNavLinkClass } 
      to={to}
    >
      { label }
    </NavLink>
  );
}
