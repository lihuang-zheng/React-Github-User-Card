import React from "react";

// import axios to grab data from api
import axios from "axios";

class GithubUser extends React.Component {
  //use state for constructor
  state = {
    users: [],
    followers: []
  };

  // componentDidMount to get the axios to get data from github api
  componentDidMount() {
    axios
      .get("https://api.github.com/users/lihuang-zheng/followers")
      .then(res => {
        console.log(res);

        this.setState({
          users: res.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>My Github.</h1>

        <div className="users">
          {this.state.users.map(user => (
            // <img width="150" src={user} key={user} alt={user} />
            <h2>{this.state.login}</h2>
          ))}
        </div>
      </div>
    );
  }
}

export default GithubUser;
