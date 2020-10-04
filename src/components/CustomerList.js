import React, { Component } from "react";
import CustomerForm from "./CustomerForm";
import { connect } from "react-redux";
import * as actions from "../actions/customerActions";
import { bindActionCreators } from "redux";

import "bootstrap/dist/css/bootstrap.min.css";

class CustomerList extends Component {
  handleEdit = (index) => {
    this.props.updateCustomerIndex(index);
  };

  handleDelete = (index) => {
    this.props.deleteCustomer(index);
  };

  render() {
    return (
      <div class="container">
        <CustomerForm />
        <br />
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Gender</th>
              <th scope="col">Moblie Phone</th>
              <th scope="col">Nationality</th>
              <th colspan="2"></th>
            </tr>
          </thead>
          <tbody>
            {this.props.list.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <p> {item.firstname}</p>
                    <p>{item.lastname}</p>
                  </td>
                  <td>{item.gender}</td>
                  <td>+{item.tel}</td>
                  <td>{item.nation}</td>
                  <td>
                    <button
                      class="btn btn-secondary"
                      onClick={() => this.handleEdit(index)}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      class="btn btn-secondary"
                      onClick={() => this.handleDelete(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      updateCustomerIndex: actions.updateIndex,
      deleteCustomer: actions.Delete,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomerList);
