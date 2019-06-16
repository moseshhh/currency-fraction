import React from "react";

class Message extends React.Component {
  render() {
    return (
      <div
        style={{
          color: "red",
          margin: "0 auto"
        }}
      >
        <b>{this.props.messages}</b>
      </div>
    );
  }
}

export default Message;
