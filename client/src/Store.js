import React, { Component } from 'react';
import { observer } from 'mobx-react';


class Store {
  employeesList = [
    {name: "John Doe", salary: 150},
    {name: "Richard Roe", salary: 225},
  ]
}
const appStore = new Store()


export default appStore;
