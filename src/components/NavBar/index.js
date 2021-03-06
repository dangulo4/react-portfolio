import React from 'react';
import { Link } from 'react-router-dom';
import { MDBNavbar } from 'mdbreact';
import './style.css';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
class Navbar extends React.Component {
  render() {
    return (
      <MDBNavbar
        expand="md"
        scrolling
        fixed="top"
        style={{ fontWeight: 'bold' }}
      >
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/"
                className={
                  window.location.pathname === '/' ||
                  window.location.pathname === '/home'
                    ? 'nav-link active'
                    : 'nav-link'
                }
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className={
                  window.location.pathname === '/about'
                    ? 'nav-link active'
                    : 'nav-link'
                }
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/portfolio"
                className={
                  window.location.pathname === '/portfolio'
                    ? 'nav-link active'
                    : 'nav-link'
                }
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className={
                  window.location.pathname === '/contact'
                    ? 'nav-link active'
                    : 'nav-link'
                }
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </MDBNavbar>
    );
  }
}

export default Navbar;
