import React, { Component } from 'react';
import Table from './Table';
import Controls from './Controls';
import Store from './Store';
import {inject, observer } from 'mobx-react';


// This component has observer decorato

@inject('Store')
@observer
class App extends Component {
  render() {
    return (
      <div>
        <h1>Mobx Table</h1>
        <Controls Store={Store}/>
        <Table />
      </div>
    );
  }
}

export default App;
