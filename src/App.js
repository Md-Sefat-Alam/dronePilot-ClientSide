import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import AuthProvider from "./Contexts/AuthProvider";
import Dashboard from "./pages/Dashboard/DashBoard/Dashboard";
import Explore from "./pages/Explore/Explore/Explore";
import Home from './pages/Home/Home/Home';
import Login from "./pages/Login/Login";
import PrivetRoute from "./pages/PrivetRoute/PrivetRoute";
import Purchase from "./pages/Purchase/Purchase";
import Register from "./pages/Register/Register";

function App() {
  return (
    <div className="App">
      <AuthProvider>
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
            <PrivetRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivetRoute>
            <PrivetRoute path="/purchase">
              <Purchase></Purchase>
            </PrivetRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
