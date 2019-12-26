import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((respose) => respose.json())
      .then((users) => this.setState({ monsters: users }))
  }

  handleChange = e=>{
    this.setState({searchField:e.target.value})
  }


  render() {
    const {monsters,searchField} = this.state
    const filteredMonster = monsters.filter(monster=>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    //console.log(filteredMonster)
    return (
      <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBox placeholder="Search Monster" 
      handleChange={this.handleChange}/>
        <CardList monsters={filteredMonster} />
      </div>
    )
  }
}

export default App;
