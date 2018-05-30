import React, { Component } from 'react';
/*import { observer } from 'mobx-react';
import appStore from './Store';
*/
import Table from './Table';
import Controls from './Controls';

// This component has observer decorator
class App extends Component {
  render() {
    return (
      <div>
        <h1>Mobx Table</h1>
        <Controls />
        <Table />
      </div>
    );
  }
}

export default App;
