import React, {Component} from 'react';
import s from './ProfileInfo.module.css';

class ProfileStatus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            status: this.props.status,
        }
    }

    componentDidMount() {

    }

    activateMode = () => {
        this.setState({editMode: true})
    };

    unActivateMode = () => {
        this.setState({editMode: false});
        this.props.updateStatus(this.state.status)

    };

    changeStatus = (e) => {
      this.setState({status: e.currentTarget.value})
    };



    render() {
        const {status} = this.props;
        console.log(this.state.status)
        console.log('profileStatus: ',status)
        return (
            <div>
                {!this.state.editMode && <div>status:
                    <span onClick={this.activateMode}>{status}</span>
                </div>}
                {this.state.editMode && <div>status:
                    <input
                        onChange={this.changeStatus}
                        autoFocus={true}
                        onBlur={this.unActivateMode}
                        value={this.state.status}
                    />
                </div>}
            </div>
        );
    }
}

export default ProfileStatus;
