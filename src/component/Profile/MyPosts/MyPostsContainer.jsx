import {addPostActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (myNewPost) => {
            dispatch(addPostActionCreator(myNewPost))
        },
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
