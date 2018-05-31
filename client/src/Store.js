import { observable, action } from "mobx";

class Store {

  @observable employeesList = [
    {name: "John Doe", salary: 150},
    {name: "Richard Roe", salary: 225},
    {name: "jimi hendrix", salary: 100}
  ]

  @action clearList = ()=> {
    this.props.store.employeesList = []
    // ERROR !!! this will not update the view
  }


}

const store = new Store();
export default store;
