import {connect} from 'react-redux'; 
import Header from './../components/Header';

const mapStateToProps = (state) => {
    console.log(state)
    return{
            userName : state.user
    }
}

export default connect(mapStateToProps,null)(Header)