import "./header.css";
import { useEffect, useState } from "react";
// import "react-icons/fa";
import { ImBlogger } from "react-icons/im";
import { GoMailRead, GoHome } from "react-icons/go";
import { IoPersonOutline } from "react-icons/io5";
import { CgToolbox } from "react-icons/cg";
import { BsFillFileBarGraphFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const Header = (props) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };
  const handleNavCollapseClose = () => {
    setIsNavCollapsed(true);
  };
  useEffect(() => {
    const menuLinks = document.querySelectorAll(".menu-link");

    menuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        menuLinks.forEach((link) => {
          link.classList.remove("nav-active");
        });
        link.classList.add("nav-active");
      });
    });
  });
  return (
    <>
      <div>
        <div className="side_bar">
          <div className="title">
            <div className="logo">
              <a href="https://github.com/ravi9694">
                <img src={"https://picsum.photos/180/240"} alt="" />
              </a>
            </div>
            <div className="username">
              <span>Ravi kumar </span>
            </div>

            <div className="side_bar_toggle" onClick={handleNavCollapse}>
              <ion-icon name="menu-outline"></ion-icon>
              {/* {`${isNavCollapsed ? "menu-outline" : "close-outline"}`} */}
            </div>
          </div>
          <ul className={`${isNavCollapsed ? "is_active" : "not_active"}`}>
            <div
              className="side_bar_toggle side_bar_toggle2"
              onClick={handleNavCollapseClose}
            >
              <ion-icon name="close-outline"></ion-icon>
            </div>
            <li onClick={handleNavCollapseClose}>
              <Link to="/" className="menu-link nav-active">
                <GoHome /> Home
              </Link>
            </li>
            <li onClick={handleNavCollapseClose}>
              <Link to="/about" className="menu-link">
                <IoPersonOutline /> About
              </Link>
            </li>
            <li onClick={handleNavCollapseClose}>
              <Link to="/resume" className="menu-link">
                <BsFillFileBarGraphFill /> Resume
              </Link>
            </li>
            <li onClick={handleNavCollapseClose}>
              <Link to="/work" className="menu-link">
                <CgToolbox /> Work
              </Link>
            </li>
            <li onClick={handleNavCollapseClose}>
              <Link to="/blog" className="menu-link">
                <ImBlogger /> Blog
              </Link>
            </li>
            <li onClick={handleNavCollapseClose}>
              <Link to="/contact" className="menu-link">
                <GoMailRead /> Contact
              </Link>
            </li>
            <div
              className={`${
                isNavCollapsed ? "is_active" : ""
              } media_icons media_icons2`}
            >
              <a href="https://instagram/k.ravi0810" className="media_icon">
                <ion-icon
                  name="logo-instagram"
                  style={{ color: "#3b5998" }}
                ></ion-icon>
              </a>
              <a href="https://twitter.com/RAVIKUM72952304" className="media_icon">
                <ion-icon
                  name="logo-twitter"
                  style={{ color: "#00acee" }}
                ></ion-icon>
              </a>
              <a
                href="https://www.linkedin.com/in/ravi-kumar-1894b5203"
                className="media_icon"
              >
                <ion-icon
                  name="logo-linkedin"
                  style={{ color: "#0e76a8" }}
                ></ion-icon>
              </a>
              <a href="https://github.com/ravi9694" className="media_icon">
                <ion-icon
                  name="logo-github"
                  style={{ color: "#AD5C51" }}
                ></ion-icon>
              </a>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Header;
