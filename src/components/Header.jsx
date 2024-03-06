import React from "react";
import { SiFacebookgaming } from "react-icons/si";

function Header() {
  return (
    <>
      <div className="headerContainer container">
        <header className="d-flex align-items-center justify-content-center justify-content-md-between  mb-4">
        <ul className=" menuHamContainer"><SiFacebookgaming/></ul>
          <ul className="nav col-12 menuContainer col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="#" className="nav-link px-2 link-secondary">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2">
                About
              </a>
            </li>
          </ul>

          <div className="col-md-3 d-flex align-items-center text-end">
            <button type="button" className="btn btn-outline-primary me-2">
              Login
            </button>
            <button type="button" className="btn btn-primary">
              Sign-up
            </button>
          </div>
        </header>
      </div>
    </>
  );
}

export default Header;
