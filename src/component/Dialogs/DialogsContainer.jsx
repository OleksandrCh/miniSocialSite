import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../hoc/WithAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        onSendMessage: () => {
            dispatch(addMessageActionCreator())
        },
        updateNewMessageBody: (newText) => {
            dispatch(updateNewMessageActionCreator(newText))
        },
    }
};


// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
//
// let AuthRedirectComponent = withAuthRedirect(DialogsContainer);

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)
(Dialogs);;
