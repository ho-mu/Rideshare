import {connect} from 'react-redux'; 
import MyRides from './../components/MyRides';
import {removePassenger} from './../actions/actions';


const mapStateToProps = (state) => {
    return {
        trips:state.trips,
        username:state.username,
        filter:state.filter
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        removePassenger:(passenger, id) => {
            dispatch(removePassenger(passenger,id));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MyRides)