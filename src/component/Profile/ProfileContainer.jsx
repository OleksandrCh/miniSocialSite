import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profileReducer";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../hoc/AuthRedirect";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let {idUser} = this.props.match.params;
        !idUser && (idUser = 2);
        this.props.getUserProfile(idUser)
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

let mapStateToProps = (state) =>{
    return {
        profile: state.profilePage.profile,
    }
};

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

let AuthRedirectComponent = withAuthRedirect(WithUrlDataContainerComponent);

export default connect(mapStateToProps, {getUserProfile})(AuthRedirectComponent);
