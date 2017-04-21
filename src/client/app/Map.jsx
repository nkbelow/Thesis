import { connect } from 'react-redux'
import map from './MapBox.jsx'

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, state, {
    popup: state.map.popup,
    parks: state.map.parks
  })
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addPopup: (park) => {
    	//later refactor to abstract out the action creator for the popup
      dispatch({
      	type: 'ADD_POPUP', 
      	park: park
      })
    },
    removePopup: () => {
    	dispatch({
    		type:'REMOVE_POPUP'
    	})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(map)