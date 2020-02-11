import React from "react";

//import cards to github user component
import FollowerCard from "./FollowerCard";
import UserCard from "./UserCard";

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
    //user axios
    axios
      .get("https://api.github.com/users/lihuang-zheng/")
      .then(res => {
        console.log(res);

        this.setState({
          users: res.data
        });
      })
      .catch(err => console.log(err));

    //user's follower axios
    axios
      .get("https://api.github.com/users/lihuang-zheng/followers")
      .then(res => {
        console.log(res);

        this.setState({
          followers: res.data
        });
      })
      .catch(err => console.log(err));
  }

  // render user and user's follower on the page.
  render() {
    return (
      // <div>
      //   <h1>My Github.</h1>

      //   <div className="users">

      //   </div>
      // </div>
      <div>
        <header className="Git-header">
          <h1>My Github.</h1>
        </header>

        <div className="container">
          {/* <UserCard user={this.state.user} /> */}
          <FollowerCard followers={this.state.followers} />
        </div>
      </div>
    );
  }
}

export default GithubUser;
