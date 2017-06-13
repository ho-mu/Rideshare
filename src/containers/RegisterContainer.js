import {connect} from 'react-redux'; 
import Register from './../components/Register';
import {setUser} from './../actions/actions';

const RegisterContainer = () => {

}

const mapDispatchToProps = (dispatch) => {
    return{
        setUser:(username) => {
            dispatch(setUser(username));
        }
    }
}

export default connect(null,mapDispatchToProps)(Register)