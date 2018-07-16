import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';
import Results from './components/Results'
import Export from './components/Export';
import AddEntry from './components/AddEntry';
import base from './base';

class App extends Component {
  state = {
    vendors: {},
    freelancers: {},
    searchText: '',
    searchResults: [],
  };

  componentDidMount() {
    this.ref = base.syncState('vendors', {
      context: this,
      state: 'vendors'
    });
    this.ref = base.syncState('freelancers', {
      context: this,
      state: 'freelancers'
    });
    //refs in firebase are references to the pieces of data in firebase
  }
  
  updateSearch = (updatedSearchText) => {
    //TODO: update search text
    const searchText = updatedSearchText;
    //TODO: set back to the state
    this.setState({ searchText });
  }

  filterResults = () => {
    const filteredArray = [];
    this.state.vendors.map(vendor => {
      if (vendor.specialty.print === true) {
      filteredArray.push(vendor);
      console.log('pushing vendor');
      }
      else {
          console.log('didn\'t find a match');
          return;
      }
    })
    this.clearResults;
    this.addToResults(...filteredArray);
  };

  addToResults = (...vendor) => {
    const searchResults = [...this.state.searchResults];
    searchResults.push(...vendor);
    this.setState({ searchResults });
  };
  
//! CANNOT KEEP THIS FUNCTION AS-IS FOR PRODUCTION
  clearResults = () => {
    this.state.searchResults.length = 0;
    console.log(this.state.searchResults);
  };

  //! Figure out how to get the correct index
  addVendor = (vendor) => {
    const vendors = {...this.state.vendors};
    // const nextIndex = vendors.length();
    vendors['6'] = vendor;
    this.setState({ 
      vendors: vendors
     });
  };
  //! Figure out how to get the correct index
  addFreelancer = (freelancer) => {
    const freelancers = {...this.state.freelancers};
    // const nextIndex = vendors.length();
    freelancers['2'] = freelancer;
    this.setState({ 
      freelancers: freelancers
     });
  };
  

  render() {
    return (
      <div className="App">
        <section>
      <div id="testing-area">
      <article>
        <Search 
          vendors={this.state.vendors}
          searchText={this.state.searchText}
          updateSearch={this.updateSearch}
          searchResults={this.state.searchResults}
          addToResults={this.addToResults}
          clearResults={this.clearResults}
          createOutput={this.createOutput}
          filterResults={this.filterResults}
        />
        <AddEntry 
          addVendor={this.addVendor}
          addFreelancer={this.addFreelancer}
        />
      </article>
      <article>
        <Results
          searchText={this.state.searchText} 
          searchResults={this.state.searchResults}
        />
      </article>
      <article>
        <Export />
      </article>
    </div>
    </section>
      </div>
    );
  }
}

export default App;
