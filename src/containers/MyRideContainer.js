import {connect} from 'react-redux'; 
import MyRides from './../components/MyRides';


const mapStateToProps = (state) => {
    return {
        trips:state.trips,
        username:state.username
    }
}

export default connect(mapStateToProps,null)(MyRides)