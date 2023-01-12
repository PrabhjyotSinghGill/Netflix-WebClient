import React, { useEffect } from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import { auth } from "./firebase";

function App() {
  const user = null;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //Logged In
        console.log(userAuth);
      } else {
        //Logged out
      }
    });
    return unsubscribe;
  }, []);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen></LoginScreen>
        ) : (
          <Switch>
            <Route exact path="/">
              <HomeScreen></HomeScreen>
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
