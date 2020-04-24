import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../hoc/WithAuthRedirect";
import {compose} from "redux";

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

export default compose(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
