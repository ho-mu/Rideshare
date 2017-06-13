import {connect} from 'react-redux'; 
import App from './../components/App';
import {setUser} from './../actions/actions';


const mapDispatchToProps = (dispatch) => {
    return{
        setUser:(username) => {
            dispatch(setUser(username));
        }
    }
}

export default connect(null,mapDispatchToProps)(App)