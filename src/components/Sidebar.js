import React, { Component } from "react"
import ExitToAppIcon from "@material-ui/icons/ExitToApp"
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined"
import ForumOutlinedIcon from "@material-ui/icons/ForumOutlined"
import HistoryIcon from "@material-ui/icons/History"
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined"
import AccountCircleIcon from "@material-ui/icons/AccountCircle"
import { NavLink } from "react-router-dom"

import "./sidebar.css"

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar__container">
        <div className="sidebar__top">
          <div className="sidebar__element">
            <NavLink
              to="/dashboard"
              activeClassName="selected"
              className="sidebar__links"
            >
              <DashboardOutlinedIcon fontSize="large" />
              <span className="sidebar__span">Dashboard</span>
            </NavLink>
          </div>
          <div className="sidebar__element">
            <NavLink
              activeClassName="selected"
              exact
              to="/"
              className="sidebar__links"
            >
              <ForumOutlinedIcon fontSize="large" />
              <span className="sidebar__span">Conversation</span>
            </NavLink>
          </div>
          <div className="sidebar__element">
            <HistoryIcon fontSize="large" />
            <span className="sidebar__span">Historique</span>
          </div>
          <div className="sidebar__element">
            <SettingsOutlinedIcon fontSize="large" />
            <span className="sidebar__span">Réglages</span>
          </div>
        </div>
        <div className="sidebar__bottom">
          <div className="sidebar__element">
            <AccountCircleIcon fontSize="large" />
            <span className="sidebar__span">Utilisateur</span>
          </div>
          <div className="sidebar__last__element">
            <ExitToAppIcon fontSize="large" />
            <span className="sidebar__span">Se déconnecter</span>
          </div>
        </div>
      </div>
    )
  }
}
export default Sidebar
