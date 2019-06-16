import React from "react";

class FraksiCard extends React.Component {
  render() {
    return (
      <div
        className="card bg-light text-dark"
        style={{
          marginLeft: "20px",
          display: "inline-block",
          marginRight: "20px",
          width: "150px",
          height: "135px"
        }}
      >
        <div
          className="card-body"
          style={{
            marginTop: "10px",
            fontSize: "25px"
          }}
        >
          <b>{this.props.nominal}</b>
        </div>
        <div
          className="card-footer"
          style={{
            borderTop: "unset"
          }}
        >
          <b>{this.props.jumlah}</b>
        </div>
      </div>
    );
  }
}

export default FraksiCard;
