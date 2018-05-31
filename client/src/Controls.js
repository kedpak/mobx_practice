import React, { Component } from "react";
import { computed, action } from "mobx"
import {inject, observer } from 'mobx-react';

@inject('Store')
@observer
class Controls extends Component {

  addEmployee = ()=> {
    const name = prompt("The name:")
    const salary = prompt("The salary:")
    this.props.store.employeesList.push({name, email:"ks@slfj"})
    // ERROR !!! this will not update the view
  }


  @action clearList = ()=> {
    const {Store} = this.props;
    //const Store = this.props.employeesList;
    console.log(Store.employeesList);

    Store.employeesList = [];
    // ERROR !!! this will not update the view
  }

  render() {

    return (
      <div className="controls">
        <button onClick={this.clearList}>clear table</button>
        <button>add record</button>
      </div>
    );
  }
};

export default Controls;
