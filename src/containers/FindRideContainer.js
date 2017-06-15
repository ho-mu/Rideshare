import {connect} from 'react-redux'; 
import FindRide from './../components/FindRide';
import {addUserToTrip} from './../actions/actions';


const mapStateToProps = (state) => {
    return {
        username:state.username,
        trips:state.trips,
        filter:state.filter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addUserToTrip:(username, id) => {
            dispatch(addUserToTrip(username, id))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FindRide)