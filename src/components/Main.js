import React, { Component } from "react";
import { withRouter } from "./withRouter";

class Main extends Component {
  componentDidMount() {
    if (localStorage.getItem("email") === null) {
      this.props.router.navigate("/login");
    }
  }
  logoutUser = () => {
    localStorage.clear();
    this.props.router.navigate("/login");
  };
  render() {
    return (
      <div className="container">
        <div>Welcome to App {localStorage.getItem("email")}</div>
        <button onClick={() => this.logoutUser()}> Logout</button>
      </div>
    );
  }
}

export default withRouter(Main);
