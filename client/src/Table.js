import React, { Component } from 'react';
import { observer } from 'mobx-react';

class Table extends Component {
    render() {
        <tbody>
          {store.employeesList.map((e, i) =>
            <Row
              key={i}
              data={e}
            />
          )}
        </tbody>
    }
};

export default Table;
