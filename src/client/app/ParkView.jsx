import React from 'react';
import axios from 'axios';
import ParkDetail from './ParkDetail.jsx';
import {individualPark} from '../reducers/getParkReducer.js'
import {getPark} from '../actions/getPark.js';
import {connect} from 'react-redux'
import {getCampgrounds} from '../actions/getCampgrounds.js'

class ParkView extends React.Component {
  componentWillMount() {
    this.props.getPark(this.props.match.params.code)
    .then((result) =>
      this.props.getCampgrounds(result[1][0].id)
      );
  }
 
  
  render() {
    console.log(this.props, 'props baby');
    return(
    	<div>
    		{ this.props.park && <ParkDetail park={this.props.park[1][0]}  activities={this.props.park[0]} 
        campgrounds={this.props.campgrounds} /> }
    	</div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      park: state.individualPark.individualPark,
      campgrounds: state.getCampgrounds.campgrounds
    }
  }

const mapDispatchToProps = (dispatch) => {
  return {
    getPark: (code) => dispatch(getPark(code)),
    getCampgrounds: (id) => dispatch(getCampgrounds(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ParkView);