import React, { Component } from "react";
//import logo from './logo.svg';
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchField from "./components/search/search.component.jsx";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const monstersFiltered = monsters.filter((m) =>
      m.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchField
          searchField={searchField}
          placeholder="search monsters"
          handleSearch={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={monstersFiltered}></CardList>
      </div>
    );
  }
}

export default App;
