import {connect} from 'react-redux'; 
import MyRides from './../components/MyRides';
import {removePassenger} from './../actions/actions';


const mapStateToProps = (state) => {
    return {
        trips:state.trips,
        username:state.username
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