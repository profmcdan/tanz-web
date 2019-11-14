import React, { Fragment, useState } from 'react';
import { FaEnvelope, FaPhone, FaSearch, FaAward } from 'react-icons/fa';
import logo from '../../images/logos/TANZ TECHNOLOGIES LTD-07.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Fragment>
      <div className="hero-content">
        <header className="site-header">
          <div className="top-header-bar">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12 col-lg-6 d-none d-md-flex flex-wrap justify-content-center justify-content-lg-start mb-3 mb-lg-0">
                  <div className="header-bar-email d-flex align-items-center">
                    <FaEnvelope />
                    <a href="#!"> info@tanztechnologies.com</a>
                  </div>

                  <div className="header-bar-text lg-flex align-items-center">
                    <p>
                      <FaPhone /> +234-813-1890-341
                    </p>
                  </div>
                </div>

                <div className="col-12 col-lg-6 d-flex flex-wrap justify-content-center justify-content-lg-end align-items-center">
                  <div className="header-bar-search">
                    <form className="flex align-items-stretch">
                      <input
                        type="search"
                        placeholder="What would you like to learn?"
                      />
                      <button
                        type="submit"
                        value=""
                        class="flex justify-content-center align-items-center"
                      >
                        <FaSearch />
                      </button>
                    </form>
                  </div>

                  <div className="header-bar-menu">
                    <ul className="flex justify-content-center align-items-center py-2 pt-md-0">
                      <li>
                        <a href="#!">Register</a>
                      </li>
                      <li>
                        <a href="#!">Login</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="nav-bar">
            <div className="container">
              <div className="row">
                <div className="col-9 col-lg-3">
                  <div className="site-branding">
                    <h1 className="site-title">
                      <a href="/" rel="home">
                        <img
                          src={logo}
                          alt="Tanz Technologies"
                          width="120"
                          height="50"
                        />
                      </a>
                    </h1>
                  </div>
                </div>

                <div className="col-3 col-lg-9 flex justify-content-end align-content-center">
                  <nav className="site-navigation flex justify-content-end align-items-center">
                    <ul className="flex flex-column flex-lg-row justify-content-lg-end align-content-center">
                      <li className="current-menu-item">
                        <a href="/"> Home</a>
                      </li>
                      <li>
                        <a href="#!">Course</a>
                      </li>
                      <li>
                        <a href="#!">AI/ML</a>
                      </li>
                      <li>
                        <a href="#!">Projects</a>
                      </li>
                      <li>
                        <a href="#!">About</a>
                      </li>
                      <li>
                        <a href="#!">Contact</a>
                      </li>
                    </ul>

                    <div className="hamburger-menu d-lg-none">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                    <div className="header-bar-cart">
                      <a
                        href="#!"
                        className="flex justify-content-center align-items-center"
                      >
                        <FaAward />
                      </a>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </Fragment>
  );
};

export default Header;
