import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getStatus, updateStatus} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../hoc/WithAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
componentDidMount() {
    let {idUser} = this.props.match.params;
    !idUser && (idUser = 7010);
        this.props.getUserProfile(idUser);
        this.props.getStatus(idUser);
    }

    render() {
        return (
            <div>
                <Profile status={this.props.status} updateStatus={this.props.updateStatus} profile={this.props.profile}/>
            </div>
        )
    }
}

let mapStateToProps = (state) =>{
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
    }
};

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
