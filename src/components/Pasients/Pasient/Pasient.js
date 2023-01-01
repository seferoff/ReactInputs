import React, { Component } from "react";
import "./Pasient.css";

const options = [
  {
    label: "Kishi",
    value: "Kishi",
  },
  {
    label: "Qadin",
    value: "Qadin",
  },
];

class Pasient extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      passport: "",
      gender: "Kishi",
      age: "",
      email: "",
      phone: "",
      info: "",
      checkbox: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      [e.target.passport]: e.target.value,
      [e.target.gender]: e.target.value,
      [e.target.age]: e.target.value,
      [e.target.email]: e.target.value,
      [e.target.phone]: e.target.value,
      [e.target.info]: e.target.value,
    });
  };

  handleCheckboxChange(e) {
    if (this.state.checkbox === false) {
      this.setState({ checkbox: "Tekrar qeydiyyat"});
    }
    else {
      this.setState({ checkbox: "Yeni qeydiyyat"});
    }
  }

  handleSubmit = (e) => {
    localStorage.setItem("name", this.state.name);
    localStorage.setItem("passport", this.state.passport);
    localStorage.setItem("gender", this.state.gender);
    localStorage.setItem("age", this.state.age);
    localStorage.setItem("email", this.state.email);
    localStorage.setItem("phone", this.state.phone);
    localStorage.setItem("info", this.state.info);
    localStorage.setItem("checkbox", this.state.checkbox);
  };

  render() {
    const { gender } =
      this.state;
    return (
      <div className="main">
        <div className="info">
          <form class="user-form">
            <label>
              Pasientin soyadi, adi, ata adi:
              <input
                className="inp"
                type="text"
                name="name"
                onChange={this.handleChange}
              />
            </label>
            <label>
              Passportun seriyasi ve nomresi:
              <input
                className="inp"
                name="passport"
                onChange={this.handleChange}
              />
            </label>
            <label>
              Cinsi:
              <select
                className="inp"
                value={gender}
                onChange={this.handleChange}
                name="gender"
              >
                {options.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </select>
            </label>
            <label>
              Yash:
              <input
                className="inp"
                type="number"
                name="age"
                onChange={this.handleChange}
              />
            </label>
            <label>
              E-mail:
              <input
                className="inp"
                type="email"
                name="email"
                onChange={this.handleChange}
              />
            </label>
            <label>
              Telefon:
              <input
                className="inp"
                type="number"
                name="phone"
                onChange={this.handleChange}
              />
            </label>
            <label>
              Simptomlar:
              <input
                className="textarea"
                type="textarea"
                name="info"
                onChange={this.handleChange}
              />
            </label>
            <label>
              Tekrar qeydiyyat:
              <input
                type="checkbox"
                name="checkbox"
                onChange={this.handleCheckboxChange}
              />
            </label>
            <button type="submit" onClick={this.handleSubmit}>
              Göndər
            </button>
          </form>
        </div>
        <div className="pasient">
          <h1>Xeste karti:</h1>
          <table>
            <tbody>
              <tr>
                <td className="left">Adi:</td>
                <td className="right">{localStorage.getItem("name")}</td>
              </tr>
              <tr>
                <td className="left">Vesiqesi:</td>
                <td className="right">{localStorage.getItem("passport")}</td>
              </tr>
              <tr>
                <td className="left">Cinsiyyeti:</td>
                <td className="right">{localStorage.getItem("gender")}</td>
              </tr>
              <tr>
                <td className="left">Yashi:</td>
                <td className="right">{localStorage.getItem("age")}</td>
              </tr>
              <tr>
                <td className="left">Email adresi:</td>
                <td className="right">{localStorage.getItem("email")}</td>
              </tr>
              <tr>
                <td className="left">Elaqe nomresi:</td>
                <td className="right">{localStorage.getItem("phone")}</td>
              </tr>
              <tr>
                <td className="left">Xesteliyi barede:</td>
                <td className="right">{localStorage.getItem("info")}</td>
              </tr>
              <tr>
                <td className="left">Qeydiyyat:</td>
                <td className="right">{localStorage.getItem("checkbox")}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Pasient;
