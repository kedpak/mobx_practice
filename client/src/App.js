import React, { Component } from 'react';
import { observer } from 'mobx-react';
import appStore from './Store';
import Table from './Table';


// This component has observer decorator
@observer
class App extends Component {
  employeesList = [
    {name: "John Doe", salary: 150},
    //...
  ]
  render() {
    return (
      <div className="App">
        <Table store={appStore} />
      </div>
    );
  }
}

export default App;
