import React from "react";

// import axios to grab data from api
import axios from "axios";

class GithubUser extends React.Component {
  //use state for constructor
  state = {
    users: []
  };

  // componentDidMount to get the axios to get data from github api
  componentDidMount() {
    axios
      .get("https://api.github.com/users/")
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>My Github.</h1>

        <div className="users">
          {this.state.users.map(user => (
            <img width="150" src={user} key={user} alt={user} />
          ))}
        </div>
      </div>
    );
  }
}

export default GithubUser;
