import React, { useState } from "react";
import "./Sidebar.css";
import HomeIcon from '@mui/icons-material/Home';
import CompareIcon from '@mui/icons-material/Compare';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { NavLink } from "react-router-dom";
import { Tooltip as ReactTooltip } from 'react-tooltip'

const iconStyle = (fontsize) => {
  return {
    fill: "transparent",
    stroke: "#1a1a2c",
    strokeWidth: 1,
    fontSize: fontsize,
  };
};

function Sidebar({compare}) {
  const cart = {length : 5};
  // const [{ user, cart, bookmarks }] = useStateValue();
  const [sidebarActive, setSidebarActive] = useState(false);
  const toggleSidebar = () =>
    setSidebarActive((sidebarActive) => !sidebarActive);

  return (
    <div className={`sidebar ${sidebarActive ? "active" : ""}`}>
      <img src="https://imgs.search.brave.com/CoK6Tfh6ikgQywXtSKmDfpe_KcKylhqnMyQD-plmfqM/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MTEvRmxpcGthcnQt/RW1ibGVtLnBuZw" className="sidebar__icon" onClick={toggleSidebar} />
      <div className="sidebar__menu">
        <NavLink title="Home" to="/" exact className="sidebar__menuItem" activeClassName="active" data-tip="Home" data-for="sidebarTooltip" onClick={toggleSidebar}>
          <HomeIcon className="sidebar__menuIcon" style={iconStyle(36)}/>
        </NavLink>
        <NavLink title="Compare" to="/compare" className="sidebar__menuItem" activeClassName="active" data-tip="Cart" data-for="sidebarTooltip"  onClick={toggleSidebar}>
          <CompareIcon className="sidebar__menuIcon" style={iconStyle(34)}/>
          <span className="sidebar__itemValue">{compare?.length || 0}</span>
        </NavLink>
      </div>
        <NavLink
          to="/login"
          className="sidebar__menuItem"
          activeClassName="active"
          data-tip="Login / Register"
          data-for="sidebarTooltip"
          onClick={toggleSidebar}
        >
          <AccountCircleOutlinedIcon className="sidebar__menuIcon" style={iconStyle(36)}
          />
          
        </NavLink>
      <ReactTooltip
        place="right"
        className="app__toolTip"
        id="sidebarTooltip"
        backgroundColor="#1a1a2cee"
        effect="solid"
      />
    </div>
  );
}
export default Sidebar;