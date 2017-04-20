import React from 'react';
import axios from 'axios';
import ParkDetail from './ParkDetail.jsx';
import {individualPark} from '../reducers/getParkReducer.js'
import {getPark} from '../thunks/getPark.js';
import {connect} from 'react-redux'
import {getCampgrounds} from '../thunks/getCampgrounds.js'

class ParkView extends React.Component {
  componentWillMount() {
    this.props.getPark(this.props.match.params.code)
  }
  // componentDidMount() {
  //   console.log('this fired');
  //     console.log('this fired after')
  //     this.props.getCampgrounds(this.props.park.id);
  // }
  
  render() {
    return(
    	<div>
    		{ this.props.park && <ParkDetail park={this.props.park[1][0]}  activities={this.props.park[0]} 
        campground={this.props.campgrounds} /> }
    	</div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      park: state.individualPark,
      campgrounds: state.campgrounds
    }
  }

const mapDispatchToProps = (dispatch) => {
  return {
    getPark: (code) => dispatch(getPark(code)),
    getCampgrounds: (id) => dispatch(getCampgrounds(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ParkView);