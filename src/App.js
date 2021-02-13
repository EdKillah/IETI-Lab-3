import React, { Component } from "react";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import TaskList from "./components/TaskList";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.css";

class App extends Component {
  state = {
    isLogged: false,
  };

  handleLoggin = (logged) => {
    this.setState({
      isLogged: logged,
    });
  };

  render() {
    const LoginView = () => <Login handleLoggin={this.handleLoggin} />;
    const TaskListView = () => <TaskList />;
    return (
      <Router>
        <Switch>
          <div>
            {this.state.isLogged ? (
              <Route path="/index" component={TaskList} />
            ) : (
              <Route exact path="/" component={LoginView} />
            )}
          </div>
          <Route exact path="/singup" component={SignUp} />{" "}
        </Switch>
      </Router>
    );
  }
}

export default App;
