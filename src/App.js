import React from 'react';
import logo from './logo.svg';

import Map from './components/Map/Map'
import Main from './components/Main/Main'
import SearchBar from './components/SearchBar/SearchBar'
import Results from './components/Results/Results'
import styles from './App.module.css'
import axios from 'axios'
import elasticlunr from 'elasticlunr' 

var index = elasticlunr(function () {
  this.addField('applicant');
  this.setRef('id');
});
class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      trucks: [],
      selectedTruck: '',
      search: ''
    }
    this.handleSelectTruck =this.handleSelectTruck.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }
  handleSelectTruck(truck){
    console.log("back")
    this.setState({
      selectedTruck: truck
    })
  }
  handleInputChange(text){
    var potentialTrucks = []
    index.search(text,{
      expand: true,
      fields:{
      applicant: {boost: 2}
  }}).map(({ ref, score }) => {
    // Get doc by ref
    const doc = index.documentStore.getDoc(ref);
    const obj = {applicant: doc.applicant, objectid: doc.id};
    potentialTrucks.push(obj);
  });
  console.log(potentialTrucks)
    console.log(index)
    this.setState({
      search: text,
      trucks: potentialTrucks
    })
    
  }
  componentDidMount(){
        axios.get('https://data.sfgov.org/resource/rqzj-sfat.json',{
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            }
        })
      .then(response => {
        console.log(response.data)
        response.data.forEach(truck => {
          index.addDoc({
            id: truck["objectid"],
            applicant: truck["applicant"]
          })
        });
          this.setState({
              trucks: response.data
          })
      })
      .catch(error => {
          console.log(error)
      })
  }


  render(){
    return (
      <div className={styles.app}>
          <Main>
              <SearchBar 
              search={this.state.search}
              handleInputChange={this.handleInputChange}/>
              <Results 
              trucks={this.state.trucks}
              handleSelectTruck={this.handleSelectTruck}/>
          </Main>
          <Map 
          selectedTruck={this.state.selectedTruck}
          trucks={this.state.trucks}/>
      </div>
    );
  }
}

export default App;
