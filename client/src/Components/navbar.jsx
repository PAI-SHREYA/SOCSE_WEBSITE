import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../store/auth';
import './navbar.css';

export const Navbar = () =>
{
  const isLoggedIn = !!localStorage.getItem('token');
  const navigate = useNavigate();
  const handleLogout = () => {
    
    // Clear the token from local storage
    localStorage.removeItem('token');
    localStorage.removeItem('Admin');


    navigate("/");
  };
  // const {isLoggedIn}= useAuth();
    return(
        <>
            {/* <header>
              <div className="container">
                <div className="logo-brand">
                  <NavLink to="/">SOCSE</NavLink>

                </div>
                
<nav className="navbar navbar-dark bg-dark navbar-expand-lg navbar-expand-md ">
                  <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    {
                      isLoggedIn ? (<li> <button onClick={handleLogout}>Logout</button></li> ):
                      (
                        <>
                          <li><NavLink to="/register">Register</NavLink></li>
                          <li><NavLink to="/login">Login</NavLink></li>
                        </>
                      )
                    }
                    
                  
                    <li><NavLink to="/clubs">Clubs</NavLink></li>
                  </ul>
                </nav>
              </div>
            </header> */}

            <nav className="navbar navbar-dark bg-dark navbar-expand-lg navbar-expand-md ">
      <Link to="/" className="navbar-brand ">
        ACSES
      </Link>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/magazine" className="nav-link">
              Magazine
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/clubs" className="nav-link">
              Clubs
            </Link>
          </li>
          {
                      isLoggedIn ? (<li className='navbar-item'> <button onClick={handleLogout}>Logout</button></li> ):
                      (
                        <>
                          <li className='navbar-item'><Link to="/register" className="nav-link">Register</Link></li>
                          <li className='navbar-item'><Link to="/login" className="nav-link">Login</Link></li>
                        </>
                      )
                    }
                    
        </ul>
      </div>
    </nav>
        </>
    );

};