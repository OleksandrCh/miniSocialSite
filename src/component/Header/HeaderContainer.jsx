import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserDataAC, logoutUser} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserDataAC()
    }
    render() {
        return (
            <Header {...this.props}/>
        )
    }
};


let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
};
export default connect(mapStateToProps, {getAuthUserDataAC,logoutUser})(HeaderContainer);
