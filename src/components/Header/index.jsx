import React, { Fragment, useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { FaEnvelope, FaPhone, FaSearch } from 'react-icons/fa';
import logo from '../../images/logos/TANZ TECHNOLOGIES LTD-07.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Fragment>
      <div className="hero-content">
        <header class="site-header">
          <div class="top-header-bar">
            <div class="container-fluid">
              <div class="row">
                <div class="col-12 col-lg-6 d-none d-md-flex flex-wrap justify-content-center justify-content-lg-start mb-3 mb-lg-0">
                  <div class="header-bar-email d-flex align-items-center">
                    <FaEnvelope />
                    <a href="#!"> info@tanztechnologies.com</a>
                  </div>

                  <div class="header-bar-text lg-flex align-items-center">
                    <p>
                      <FaPhone /> +234-813-1890-341
                    </p>
                  </div>
                </div>

                <div class="col-12 col-lg-6 d-flex flex-wrap justify-content-center justify-content-lg-end align-items-center">
                  <div class="header-bar-search">
                    <form class="flex align-items-stretch">
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

                  <div class="header-bar-menu">
                    <ul class="flex justify-content-center align-items-center py-2 pt-md-0">
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

          <div className="container">
            <Navbar color="light" light expand="md">
              <NavbarBrand href="/">
                <img
                  src={logo}
                  alt="Tanz Technologies"
                  height="40"
                  width="60"
                />
              </NavbarBrand>
              <NavbarToggler onClick={toggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="/">Agriculture</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/">AL/ML</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/">Learning</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/">Projects</NavLink>
                  </NavItem>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Options
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Option 1</DropdownItem>
                      <DropdownItem>Option 2</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>Reset</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        </header>
      </div>
    </Fragment>
  );
};

export default Header;
