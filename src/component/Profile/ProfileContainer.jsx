import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profileReducer";
import {Redirect, withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let {idUser} = this.props.match.params;
        !idUser && (idUser = 2);
        this.props.getUserProfile(idUser)
    }

    render() {
        if (!this.props.isAuth) {
            return <Redirect to={'/login'}/>
        };

        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
};

let mapStateToProps = (state) =>{
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
    }
};

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);
