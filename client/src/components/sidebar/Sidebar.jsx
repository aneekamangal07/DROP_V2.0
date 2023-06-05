import axios from "axios";
import React, { useEffect, useState } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import me from "../../assests/me.jpeg";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src={me} alt="" />
        <p>
          I am a full stack web developer. I know languages like C, C++, Javascript, HTML, CSS, as well as libraries like react.js, node.js, express.js. I have worked with mongoDB and MySQL databases.
        </p>
          <p>This is a blogging website, I named it as DROP, you can drop your thoughts here:)</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US ON</span>
        <div className="sidebarSocial">
          <i className="sidebarSocialIcons fa-brands fa-square-facebook"></i>
          <i className="sidebarSocialIcons fa-brands fa-square-instagram"></i>
          <i className="sidebarSocialIcons fa-brands fa-square-twitter"></i>
        </div>
      </div>
    </div>
  );
}
