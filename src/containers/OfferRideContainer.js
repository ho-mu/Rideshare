import {connect} from 'react-redux'; 
import OfferRide from './../components/OfferRide';
import {addTrip} from './../actions/actions';


const mapStateToProps = (state) => {
    return {
        username:state.username,
        trips:state.trips
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addTrip:(details) => {
            dispatch(addTrip(details));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(OfferRide)