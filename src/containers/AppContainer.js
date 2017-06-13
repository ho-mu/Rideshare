import {connect} from 'react-redux'; 
import App from './../components/App';
import {setUser, loadAllTrips} from './../actions/actions';


const mapDispatchToProps = (dispatch) => {
    return{
        setUser:(username) => {
            dispatch(setUser(username));
        },
        loadAllTrips:(trips)=>{
            dispatch(loadAllTrips(trips))
        }
    }
}

export default connect(null,mapDispatchToProps)(App)