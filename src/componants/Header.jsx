import { NavLink } from 'react-router-dom';

const Header = () => {

    return (
        <div className="Header-container">
            <div className="nav-links">
            <NavLink exact to="/" className="link" activeClassName="activeLink">Home</NavLink>
            <NavLink exact to="/aboutMe" className="link" activeClassName="activeLink">About Me</NavLink>
            <NavLink exact to="/projects" className="link" activeClassName="activeLink">Projects</NavLink>
            <NavLink exact to="/contactMe" className="link" activeClassName="activeLink">Contact Me</NavLink>
            </div>
        </div>
    );
};

export default Header;