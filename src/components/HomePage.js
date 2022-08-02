import { Component } from "react";
import Header from "./Header";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <div>
          <Header url="/" />
        </div>
        <div className="home_container">
          <div className="home-intro">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGxkACmuK0fSJg2J8SvrRkZX7b6qXe-kwhdw&usqp=CAU"
              alt="scream_avatar"
            />
            <p>Hi! Pick up the phone now. I wanna hear you scream hahaha</p>
          </div>
        </div>
      </div>
    );
  }
}
