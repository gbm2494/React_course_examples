import React, {Component} from 'react';
import {connect} from 'react-redux';

export class NewsDetail extends Component{
  render(){
    if(this.props.newSelected == null){
        return (<div></div>);
    }

    return(
      <div className="col-md-9 news_details">
        <div className="details">
          <h2>{this.props.newSelected.webTitle}</h2>
          <div className="author">
            <small>Section name: {this.props.newSelected.sectionName} at: {this.props.newSelected.webPublicationDate}</small>
          </div>
          <p>Read full version on: <a href={this.props.newSelected.webUrl}>{this.props.newSelected.webUrl}</a></p>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {newSelected : state.currentlySelected};
}

export default connect(mapStateToProps)(NewsDetail);
