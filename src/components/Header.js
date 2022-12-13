import React, { useState, useRef } from "react";
import "./Header.css";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function Header() {

  return (
    <div className="header">
      <div className="header__nav">
        <div className="header__search">
          <SearchOutlinedIcon className="header__searchIcon" />
          <input
            type="text"
            placeholder="Search..."
          />
        </div>
        <img src="https://imgs.search.brave.com/wcGvNyb38Vj8Ou7H5EICv6GG22qZM7YcsoFQsVUX2mo/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MTEvRmxpcGthcnQt/TG9nby5wbmc" className="header__logo" />
      </div>
    </div>
  );
}
export default Header;
