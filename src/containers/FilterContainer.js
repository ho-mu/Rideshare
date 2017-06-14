import {connect} from 'react-redux'; 
import Filter from './../components/Filter';
import {updateTripFilter} from './../actions/actions';


const mapStateToProps = (state) => {
    return {
        username:state.username,
        trips:state.trips,
        filter:state.filter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateTripFilter:(filter) => {
            dispatch(updateTripFilter(filter))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Filter)