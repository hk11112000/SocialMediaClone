import React from "react";
import { FaHome } from "react-icons/fa";
import { MdPostAdd } from "react-icons/md";

function SiderBar({ value, selectedTab, setSelectedTab }) {
  return (
    <div
      className="d-flex sideBar flex-column flex-shrink-0 p-3 text-bg-dark"
      style={{ width: "15%" }}
    >
      <a
        href="/"
        className="d-flex sideBarTitle align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg className="bi pe-none me-2" width="40" height="32">
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <span className="facebookContainer fs-4">Facebook 😁</span>
      </a>
      <hr></hr>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item" onClick={() => setSelectedTab("Home")}>
          <a
            href="#"
            className={`nav-link activeOnWebApp text-white ${
              selectedTab === "Home" && "active"
            }`}
            aria-current="page"
          >
            Home
          </a>
          <a
            href="#"
            className={`nav-link activeOnMobile text-white ${
              selectedTab === "Home" && "active"
            }`}
            aria-current="page"
          >
 
            <FaHome />
          </a>
        </li>
        <li onClick={() => setSelectedTab("Create Post")}>
          <a
            href="#"
            className={`nav-link activeOnWebApp text-white ${
              selectedTab === "Create Post" && "active"
            }`}
          >

            Create Post
          </a>
          <a
            href="#"
            className={`nav-link activeOnMobile text-white ${
              selectedTab === "Create Post" && "active"
            }`}
          >

            <MdPostAdd />
          </a>
        </li>
      </ul>
      <hr></hr>
      <div className="dropdown">
        <a
          href="#"
          className="d-flex aContainer align-items-center text-white text-decoration-none "
        >
          <img
            src="./react.svg"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          ></img>
          <strong>Himanshu Karpe</strong>
        </a>
        <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
          <li>
            <a className="dropdown-item" href="#">
              New project...
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <hr className="dropdown-divider"></hr>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SiderBar;
