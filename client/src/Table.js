import React, { Component } from 'react';
import Row from './Row';
import {inject, observer } from 'mobx-react';

@inject('Store')
@observer
class Table extends Component {
  render() {
    const {Store} = this.props
    return (
      <table>
        <thead>
          <tr>
            <td>Name:</td>
            <td>Daily salary:</td>
          </tr>
        </thead>
        {Store.employeesList.map((e, i) =>
          <Row
            key={i}
            data={e}
          />
        )}
        <tbody />
      </table>
    );
  }
}

export default Table;
