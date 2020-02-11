import React from "react";

// import axios to grab data from api
import axios from "axios";

class GithubUser extends React.Component {
  //use state for constructor
  state = {
    users: [],
    userText: "",
    error: ""
  };

  render() {
    return (
      <div>
        <h1>My Github.</h1>

        <input
          type="text"
          value={this.state.userText}
          onChange={this.handleChanges}
        />

        <button onClick={this.fetchUsers}>Fetch Users</button>

        {this.state.error && (
          <p style={{ color: "crimson" }}>{this.state.error}</p>
        )}

        <div className="users">
          {!this.state.error &&
            this.state.users.map(user => (
              <img width="150" src={user} key={user} alt={user} />
            ))}
        </div>
      </div>
    );
  }
}

export default GithubUser;
