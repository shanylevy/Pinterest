import React, { Component } from 'react';
import './search.css';



class Search extends Component{
    render() {
      return (
        <div className="containerSearch">
            <button className='SearchBtn' type="submit"><i class="fa fa-search"></i></button>
            <input className='inputSearch'   type="text" placeholder="Search" name="search"></input>
    </div>

        );
  
    }
}

export default Search;
