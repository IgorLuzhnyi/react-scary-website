import { Component } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

export default class Nav extends Component {
  render() {
    return (
      <div>
        <ul className="nav">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/posts">Twitter</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
          <li>
            <NavLink to="/contacts">Targets</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
