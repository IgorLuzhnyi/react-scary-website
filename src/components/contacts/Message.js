const Message = ({ data }) => {
  const { sender, text } = data;

  return (
    <div className={sender === "Scream" ? "my-msg" : "friend-msg"}>
      <li className="message">
        <p className="sender">{sender}</p>
        <p className="chat_text">{text}</p>
      </li>
    </div>
  );
};

export default Message;
