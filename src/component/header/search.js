import React, { Component } from 'react';
import './search.css';



class Search extends Component {
  state = {
    query: '',
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    })
  }



  render() {
    return (
      <div className="containerSearch">
        <button className='SearchBtn' type="submit"><i class="fa fa-search"></i></button>
        <input
          className='inputSearch' type="text" placeholder="Search"
          ref={input => this.search = input}
          onChange={this.handleInputChange} >
        </input>
      </div>

    );

  }
}

export default Search;
