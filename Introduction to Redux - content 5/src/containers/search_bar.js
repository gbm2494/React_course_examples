import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchNews } from '../actions/index';

export class SearchBar extends Component{
  constructor(props){
      super(props);
      this.state = {term : ''};

      this.onInputChange = this.onInputChange.bind(this);
      this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event){
      this.setState({ term : event.target.value});
  }

  onFormSubmit(event){
    event.preventDefault();

    this.props.fetchNews(this.state.term);
    this.setState({term : ''});
  }

  render(){
    return (
      <form onSubmit={this.onFormSubmit} className="input-group col-md-4 pull-xs-right">
        <input
          placeholder="Type the content of the news you want to find"
          className="form-control searchBar"
          value={this.state.term}
          onChange={this.onInputChange}/>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    );
  }
}


function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchNews}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
