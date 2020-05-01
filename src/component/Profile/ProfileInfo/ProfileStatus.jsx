import React, {Component} from 'react';
import s from './ProfileInfo.module.css';

class ProfileStatus extends Component {
   state = {
            editMode: false,
            status: this.props.status,
        };
   componentDidUpdate(prevProps, prevState, snapshot) {
       console.log('componentDidUpdate');
       if(prevProps.status !== this.props.status){
            this.setState({status: this.props.status});
           console.log('props is change')
       }
   }

    activateMode = () => {
        this.setState({editMode: true})
    };

    unActivateMode = () => {
        this.setState({editMode: false});
        this.props.updateStatus(this.state.status)
    };

    changeStatus = (e) => {
      this.setState({status: e.target.value})
    };

    render() {
        console.log('render')
        return (
            <div>
                {!this.state.editMode &&
                <div onClick={this.activateMode}>status:
                    <span >{this.props.status}</span>
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
