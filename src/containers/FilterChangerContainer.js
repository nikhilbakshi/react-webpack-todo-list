import {connect} from 'react-redux'
import FilterChanger from '../components/FilterChanger.jsx'
import {changeFilter} from '../actions/actions.js'

var mapStateToProps = (state) => {
  return state
}

var mapDispatchToProps = (dispatch) => {
  return {
    showOnlyCompleted: () => {
      console.log('In showOnlyCompleted function')
      dispatch(changeFilter('done'))
    },

    showOnlyIncomplete: () => {
      dispatch(changeFilter('incomplete'))
    },

    showAll: () => {
      dispatch(changeFilter('all'))
    }
  }
}

var FilterChangerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterChanger)

export default FilterChangerContainer
