import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

export function withAuthRedirect(Component) {

    function RedirectComponent(props) {
        if (!props.isAuth) {
            return <Redirect to={'/login'}/>
        }
        return Component;
    }

    let mapStateToProps = (state) => {
        return {
            isAuth: state.auth.isAuth,
        }
    };

    let ConnectedAuthRedirectComponent = connect(mapStateToProps)(RedirectComponent);

    return ConnectedAuthRedirectComponent;
}
