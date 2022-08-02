import { Component } from "react";
import { contacts } from "../constants/constants";
import Header from "./Header";
import Message from "./Message";

export default class ContactData extends Component {
  render() {
    const userPath = this.props.match.params.test;
    const curUser = contacts.find((user) => user.username === userPath);

    return (
      <div>
        <div>
          <Header url="/" />
        </div>
        <div className="contact-data_wrapper">
          <div className="contact_general-info">
            <div className="contact_general-info_wrapper">
              <div className="main-img_container">
                <img
                  src={curUser.avatarImg}
                  className="user-main_img"
                  alt="user_avatar"
                />
              </div>
              <div className="main_user-data">
                <p>First name: {curUser.firstName}</p>
                <p>Last name: {curUser.lastName}</p>
                <p>Gender: {curUser.gender}</p>
                <p>Description: {curUser.description}</p>
              </div>
            </div>
          </div>

          <div className="chat">
            <h2>Chat with {curUser.firstName}</h2>
            {curUser.chat_history.map((message_data) => (
              <Message key={message_data.msgId} data={message_data} />
            ))}
          </div>
        </div>
        <button
          onClick={() => this.props.history.goBack()}
          className="back-button"
        >
          Go Back
        </button>
      </div>
    );
  }
}
