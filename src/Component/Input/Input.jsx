import React from "react";
import "./Input.css";
import Message from "./Message";
import FraksiCard from "./FraksiCard";
const $ = window.$;

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.fraksi = [100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 100, 10];

    this.state = {
      nominal: 0,
      message: ""
    };
  }

  fungsiHitung = angka => {
    var hasil = [];
    var sisa = angka;
    console.log(this.fraksi.length);
    for (var i = 0; i < this.fraksi.length; i++) {
      if (angka / this.fraksi[i] >= 1) {
        var hitung = parseInt(sisa / this.fraksi[i]);
        if (hitung > 0) {
          //   hasil[String(this.fraksi[i])] = hitung;
          hasil.push({ fraksi: this.fraksi[i], jumlah: hitung });
          sisa = sisa % this.fraksi[i];
        }
      }
    }
    console.log(hasil);
    return hasil;
  };

  validateString = string => {
    let valid;
    if (string.match(/[A-Z,]/i)) {
      if (string.toLowerCase().includes("rp")) {
        if (string.toLowerCase().indexOf("rp") > 0) {
          this.setState({
            message: "Wrong Position of Rp"
          });
          valid = false;
        } else if (string.indexOf(" ") > 2) {
          this.setState({
            message: "Wrong Position of space"
          });
          valid = false;
        } else {
          this.setState({
            message: ""
          });
          valid = true;
        }
      } else if (string.includes(" ") || string.includes(",")) {
        this.setState({
          message: "Invalid Separator"
        });

        valid = false;
      } else {
        this.setState({
          message: "Invalid Character"
        });
        valid = false;
      }
    } else {
      this.setState({
        message: ""
      });

      valid = true;
    }
    if (valid) {
      var numbers = string.match(/[0-9]+/g);
      console.log(numbers);
    }
    return numbers;
  };

  handleKeyup = e => {
    let input_value = document.getElementById("input_nominal").value;

    this.validateString(input_value);

    this.setState({
      hasilHitung: ""
    });

    if (e.keyCode === 13) {
      if (this.validateString(input_value)) {
        this.setState(
          {
            nominal: parseInt(this.validateString(input_value))
          },
          () => {
            let hasil = this.fungsiHitung(this.state.nominal);
            this.setState(
              {
                hasilHitung: hasil
              },
              () => console.log(this.state)
            );
          }
        );
      }
    }
  };

  render() {
    return (
      <div>
        <div className="card-body row no-gutters align-items-center">
          <div className="input-outer">
            <input
              id="input_nominal"
              className="input-form form-control form-control-lg"
              type="text"
              placeholder="Enter Valid Number"
              onKeyUp={this.handleKeyup}
            />
          </div>
        </div>
        <div className="row">
          <Message messages={this.state.message} />
        </div>
        <div style={{ textAlign: "center" }} className="text-center">
          {this.state.hasilHitung
            ? this.state.hasilHitung.map(element => (
                <FraksiCard nominal={element.fraksi} jumlah={element.jumlah} />
              ))
            : null}
        </div>
      </div>
    );
  }
}

export default Input;
