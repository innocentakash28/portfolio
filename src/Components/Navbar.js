import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import WOW from "wowjs";

const Navbar = () => {
  const [Menu, setMenu] = useState(false);
  useEffect(() => {
    new WOW.WOW().init();
  });

  return (
    <>
      <nav>
        <span className="animate__animated animate__fadeInUp" id="brand">
          <Link to="/">
            <p style={{ letterSpacing: 2, fontSize: 24 }}>akash.</p>
          </Link>
        </span>
        <ul className="animate__animated animate__fadeInLeft" id="menu">
          <li>
            <Link to="/">
              home<span>.</span>
            </Link>
          </li>
          <li>
            <Link to="/work">
              work<span>.</span>
            </Link>
          </li>
          <li>
            <Link to="/about">
              about me<span>.</span>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              contact<span>.</span>
            </Link>
          </li>
        </ul>
        <div id="toggle">
          <div
            onClick={() => {
              setMenu(true);
            }}
            className="span">
            menu
          </div>
        </div>
      </nav>
      <div id="resize" className={Menu ? "active" : ""}>
        <div
          className="close-btn"
          onClick={() => {
            setMenu(false);
          }}>
          close
        </div>
        <ul id="menu">
          <li>
            <Link to="/">
              home<span>.</span>
            </Link>
          </li>
          <li>
            <Link to="/work">
              work<span>.</span>
            </Link>
          </li>
          <li>
            <Link to="/about">
              about me<span>.</span>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              contact<span>.</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
