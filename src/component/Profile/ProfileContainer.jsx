import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let {idUser} = this.props.match.params;
        console.log(idUser)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${idUser}`)
            .then(response => {
                console.log('componentDidMount',response.data);
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        console.log('ProfileContainer ',this.props)
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
};

let mapStateToProps = (state) =>{
    return {profile: state.profilePage.profile}
};

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);