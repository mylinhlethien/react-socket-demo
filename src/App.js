import React from "react"
import "./App.css"
import Sidebar from "./components/Sidebar"
import Home from "./components/Home"
import Dashboard from "./components/Dashboard"
import { Router, Route } from "react-router-dom"
import history from "./history"

function App() {
  return (
    <div className="menu">
      <div id="wrapper" className="body__color">
        <Router history={history}>
          <Sidebar />
          <Route exact path="/" component={Home} />
          <Route path="/dashboard" component={Dashboard} />
        </Router>
      </div>
    </div>
  )
}

export default App
