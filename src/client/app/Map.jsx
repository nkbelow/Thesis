import { connect } from 'react-redux'
import map from './MapBox.jsx' 
import {activePark, addPopup, removePopup} from '../actions/actions.js'


const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, state, {
    popup: state.map.popup,
    activePark: state.setActivePark.park,
    activeParks: state.setActiveParks.parks,
    filteredParks: state.getParksReducer.filteredParks,
    remainingParks: state.getParksReducer.remainingParks
  })
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addPopup: (park) => {
    	//later refactor to abstract out the action creator for the popup
      dispatch(addPopup(park))
    },
    removePopup: () => {
    	dispatch(removePopup())
    },
    setActivePark: (park) => { 
      dispatch(activePark(park)) 
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(map)