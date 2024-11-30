import { useState } from "react";
import toast from "react-hot-toast";
import useAxios from "../hooks/useAxios";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false); // State to track menu visibility

  // Toggle menu state
  const user = localStorage.getItem('name');
  console.log(user);
  const toggleMenu = () => setNavOpen(!navOpen);
  const handlelogout = () => {
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    toast.success('Logout successful')
  }
  const axios = useAxios();
  const handleDeleteUser = async () => {
    userData={email:localStorage.getItem('email')}
    const data=axios.delete('/api/auth/delete-user',)
  }

  // Close menu when a link is clicked
  const closeMenu = () => setNavOpen(false);

  return (
    <nav>
      <div className="nav__header">
        <div className="nav__logo">
          <a href="#">
            <img
              src="assets/logo-dark.png"
              alt="logo"
              className="nav__logo-dark"
            />
            <img
              src="assets/logo-white.png"
              alt="logo"
              className="nav__logo-white"
            />
          </a>
        </div>
        <div className="nav__menu__btn" id="menu-btn" onClick={toggleMenu}>
          <i className={navOpen ? "ri-close-line" : "ri-menu-line"}></i>
        </div>
      </div>
      <ul
        className={`nav__links ${navOpen ? "open" : ""}`} // Add "open" class dynamically
        id="nav-links"
        onClick={closeMenu} // Close menu on clicking a link
      >
        <li><a href="#home">HOME</a></li>
        <li><a href="#special">SPECIAL</a></li>
        <li><a href="#menu">MENU</a></li>
        <li><a href="#event">EVENTS</a></li>
        <li><a href="#contact">CONTACT US</a></li>
        <li><a href="/srs">SRS</a></li>
        {
          user&& <li><a href="/all-users" >ALL USERS</a></li>
        }
        {
          user&& <li><a href="/update">UPDATE</a></li>
        }
        {
          user&& <li><a >DELETE</a></li>
        }
        {user ? (
  <li><a href="/" onClick={handlelogout}>LOG OUT</a></li>
) : (
  <li><a href="/login">LOG IN</a></li>
        )}
        
        
      </ul>
    </nav>
  );
};

export default Navbar;
