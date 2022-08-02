import { Component } from "react";
import { posts_data } from "../constants/constants";
import Header from "./Header";
import Post from "./Post";

export default class Posts extends Component {
  render() {
    return (
      <div>
        <div>
          <Header url="/" />
        </div>
        <div className="posts-container">
          {posts_data.map((post) => (
            <Post key={post.id} data={post} />
          ))}
        </div>
      </div>
    );
  }
}
