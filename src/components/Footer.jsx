import React from "react";

function Footer() {
  return (
    <div className="container footerContainer">
      <footer className="d-flex flex-wrap justify-content-between align-items-center   border-top">
        <p className="col-md-4 mb-0 text-body-secondary ">Made with ❤️ by Himanshu Karpe</p>

        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              About
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
