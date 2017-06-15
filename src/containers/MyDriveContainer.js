import {connect} from 'react-redux'; 
import MyDrives from './../components/MyDrives';


const mapStateToProps = (state) => {
    return {
        trips:state.trips,
        username:state.username,
        filter:state.filter
    }
}

export default connect(mapStateToProps,null)(MyDrives)