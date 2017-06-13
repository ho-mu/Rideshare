import {connect} from 'react-redux'; 
import Header from './../components/Header';

const mapStateToProps = (state) => {
    return{
            userName : state.username
    }
}

export default connect(mapStateToProps,null)(Header)