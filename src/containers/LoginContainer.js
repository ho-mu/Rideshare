import {connect} from 'react-redux'; 
import Login from './../components/Login';
import {setUser} from './../actions/actions';

const LoginContainer = () => {

}

const mapDispatchToProps = (dispatch) => {
    return{
        setUser:(username) => {
            dispatch(setUser(username));
        }
    }
}

export default connect(null,mapDispatchToProps)(Login)