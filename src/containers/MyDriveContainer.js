import {connect} from 'react-redux'; 
import MyDrives from './../components/MyDrives';
import {removeTrip} from './../actions/actions';


const mapStateToProps = (state) => {
    return {
        trips:state.trips,
        username:state.username
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        removeTrip:(id) => {
            dispatch(removeTrip(id));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MyDrives)