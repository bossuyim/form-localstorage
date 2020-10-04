import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/customerActions";
import { bindActionCreators } from "redux";
import PhoneInput from "react-phone-input-2";

import "react-phone-input-2/lib/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

class CustomerForm extends Component {
  state = {
    ...this.returnStateObject(),
  };

  returnStateObject() {
    if (this.props.currentIndex == -1)
      return {
        title: "",
        firstname: "",
        lastname: "",
        birthday: "",
        nation: "",
        citizenID: "",
        gender: "",
        tel: "",
        passportNo: "",
        salary: "",
      };
    else return this.props.list[this.props.currentIndex];
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.currentIndex != this.props.currentIndex ||
      prevProps.list.length != this.props.list.length
    ) {
      this.setState({ ...this.returnStateObject() });
    }
  }

  handleChange = (e) => {
    // this.setState({ selectedOption }, () =>
    //   console.log(`Option selected:`, this.state.selectedOption)
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.currentIndex == -1) this.props.insertCustomer(this.state);
    else this.props.updateCustomer(this.state);
  };

  render() {
    return (
      <div className="mainForm">
        <form novalidate onSubmit={this.handleSubmit} autoComplete="off">
          <div class="form-inline">
            <div className="formlabel">Title</div>
            <select
              name="title"
              onChange={this.handleInputChange}
              value={this.state.title}
              class="form-control"
              id="inlineFormCustomSelect"
              required
            >
              <option selected>Select Title</option>
              <option value="Mr.">Mr.</option>
              <option value="Mrs.">Mrs.</option>
              <option value="Miss">Miss</option>
            </select>
            <br />
            <br />
            <br />
            <div className="formlabel">Firstname</div>
            <input
              class="form-control mb-2 mr-sm-2 mb-sm-0"
              name="firstname"
              placeholder="First Name"
              onChange={this.handleInputChange}
              value={this.state.firstname}
              required
              id="validationTooltip03"
            />
            <div class="invalid-tooltip">Please provide a Firstname.</div>
            <div className="formlabel">Lastname</div>
            <input
              class="form-control mb-2 mr-sm-2 mb-sm-0"
              name="lastname"
              placeholder="Last Name"
              onChange={this.handleInputChange}
              value={this.state.lastname}
              required
            />
          </div>
          <div class="form-inline">
            <div className="formlabel">Birthday</div>
            <input
              name="birthday"
              class="form-control mb-2 mr-sm-2"
              placeholder="Birthday"
              type="date"
              onChange={this.handleInputChange}
              value={this.state.birthday}
              required
            />
            <div className="formlabel">Nationality</div>
            <select
              name="nation"
              onChange={this.handleInputChange}
              value={this.state.nation}
              class="form-control"
              id="inlineFormCustomSelect"
            >
              <option selected>Select Nationality</option>
              <option value="Afrikaans">Afrikaans</option>
              <option value="Albanian">Albanian</option>
              <option value="Arabic">Arabic</option>
              <option value="Armenian">Armenian</option>
              <option value="Basque">Basque</option>
              <option value="Bengali">Bengali</option>
              <option value="Bulgarian">Bulgarian</option>
              <option value="Catalan">Catalan</option>
              <option value="Cambodian">Cambodian</option>
              <option value="Chinese (Mandarin)">Chinese (Mandarin)</option>
              <option value="Croatian">Croatian</option>
              <option value="Czech">Czech</option>
              <option value="Danish">Danish</option>
              <option value="Dutch">Dutch</option>
              <option value="English">English</option>
              <option value="Estonian">Estonian</option>
              <option value="Fiji">Fiji</option>
              <option value="Finnish">Finnish</option>
              <option value="French">French</option>
              <option value="Georgian">Georgian</option>
              <option value="German">German</option>
              <option value="Greek">Greek</option>
              <option value="Gujarati">Gujarati</option>
              <option value="Hebrew">Hebrew</option>
              <option value="Hindi">Hindi</option>
              <option value="Hungarian">Hungarian</option>
              <option value="Icelandic">Icelandic</option>
              <option value="Indonesian">Indonesian</option>
              <option value="Irish">Irish</option>
              <option value="Italian">Italian</option>
              <option value="Japanese">Japanese</option>
              <option value="Javanese">Javanese</option>
              <option value="Korean">Korean</option>
              <option value="Latin">Latin</option>
              <option value="Latvian">Latvian</option>
              <option value="Lithuanian">Lithuanian</option>
              <option value="Macedonian">Macedonian</option>
              <option value="Malay">Malay</option>
              <option value="Malayalam">Malayalam</option>
              <option value="Maltese">Maltese</option>
              <option value="Maori">Maori</option>
              <option value="Marathi">Marathi</option>
              <option value="Mongolian">Mongolian</option>
              <option value="Nepali">Nepali</option>
              <option value="Norwegian">Norwegian</option>
              <option value="Persian">Persian</option>
              <option value="Polish">Polish</option>
              <option value="Portuguese">Portuguese</option>
              <option value="Punjabi">Punjabi</option>
              <option value="Quechua">Quechua</option>
              <option value="Romanian">Romanian</option>
              <option value="Russian">Russian</option>
              <option value="Samoan">Samoan</option>
              <option value="Serbian">Serbian</option>
              <option value="Slovak">Slovak</option>
              <option value="Slovenian">Slovenian</option>
              <option value="Spanish">Spanish</option>
              <option value="Swahili">Swahili</option>
              <option value="Swedish ">Swedish </option>
              <option value="Tamil">Tamil</option>
              <option value="Tatar">Tatar</option>
              <option value="Telugu">Telugu</option>
              <option value="Thai">Thai</option>
              <option value="Tibetan">Tibetan</option>
              <option value="Tonga">Tonga</option>
              <option value="Turkish">Turkish</option>
              <option value="Ukrainian">Ukrainian</option>
              <option value="Urdu">Urdu</option>
              <option value="Uzbek">Uzbek</option>
              <option value="Vietnamese">Vietnamese</option>
              <option value="Welsh">Welsh</option>
              <option value="Xhosa">Xhosa</option>
            </select>
          </div>
          <br />
          <div class="form-inline">
            <div className="formlabel">Citizen ID</div>
            <input
              class="form-control"
              name="citizenID"
              placeholder="Ex . 0-0000-00000-00-0"
              onChange={this.handleInputChange}
              value={this.state.citizenID}
            />
          </div>
          <br />
          <div class="form-inline">
            <div className="formlabel">Gender :</div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                name="gender"
                onChange={this.handleInputChange}
                type="radio"
                id="inlineCheckbox1"
                value="Male"
              ></input>
              <label class="form-check-label" for="inlineCheckbox1">
                Male
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                name="gender"
                onChange={this.handleInputChange}
                type="radio"
                id="inlineCheckbox2"
                value="Female"
              ></input>
              <label class="form-check-label" for="inlineCheckbox2">
                Female
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                name="gender"
                onChange={this.handleInputChange}
                type="radio"
                id="inlineCheckbox3"
                value="Unisex"
              ></input>
              <label class="form-check-label" for="inlineCheckbox3">
                Unisex
              </label>
            </div>
          </div>
          <br />
          <div class="form-inline">
            <div className="formlabel">Mobile Phone :</div>
          </div>
          <PhoneInput
            class="form-control"
            name="tel"
            country={"th"}
            value={this.state.tel}
            onChange={(tel) => this.setState({ tel })}
            required
          />

          <br />
          <div class="form-inline">
            <div className="formlabel">Passport Number :</div>
            <input
              class="form-control "
              name="passportNo"
              placeholder="Ex . AB123456 "
              onChange={this.handleInputChange}
              value={this.state.passportNo}
            />
          </div>
          <br />
          <div class="form-inline">
            <div className="formlabel">Expected Salary :</div>
            <input
              class="form-control "
              name="salary"
              placeholder="Salary"
              onChange={this.handleInputChange}
              value={this.state.salary}
              required
            />
            <div className="formlabel">THB</div>
            <button
              style={{
                padding: "10px 20px 10px 20px",
                marginLeft: "250px",
              }}
              class="btn btn-primary"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.list,
    currentIndex: state.currentIndex,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      insertCustomer: actions.insert,
      updateCustomer: actions.update,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomerForm);
