import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import './App.css';
import Dashboard from "./pages/Dashboard/DashBoard/Dashboard";
import Explore from "./pages/Explore/Explore/Explore";
import Home from './pages/Home/Home/Home';
import Login from "./pages/Login/Login";
import Purchase from "./pages/Purchase/Purchase";
import Register from "./pages/Register/Register";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/explore">
            <Explore></Explore>
          </Route>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/purchase">
            <Purchase></Purchase>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
