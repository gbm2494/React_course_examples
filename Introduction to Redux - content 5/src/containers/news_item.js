import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeNewsSelected } from '../actions/index';

export class NewsItem extends Component{
  constructor(props){
      super(props);
      this.onClick = this.onClick.bind(this);
  }

  onClick(){
    this.props.changeNewsSelected(this.props.singleNews);
  }

  render(){
    return(
      <li onClick={this.onClick} className="list-group-item">
      <div className="media">
        <div className="media-body">
          <div className="media-heading">
            {this.props.title}
          </div>
        </div>
      </div>
    </li>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({changeNewsSelected}, dispatch);
}

export default connect(null, mapDispatchToProps)(NewsItem);
