import {connect} from 'react-redux'; 
import MyDrives from './../components/MyDrives';


const mapStateToProps = (state) => {
    return {
        trips:state.trips,
        username:state.username
    }
}

export default connect(mapStateToProps,null)(MyDrives)