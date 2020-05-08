import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthValidator, minLengthValidator, required} from "../../utils/validators/validators";
import {loginUser} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const maxLengthValidator15 = maxLengthValidator(15);
const maxLengthValidator35 = maxLengthValidator(35);
const minLengthValidator5 = minLengthValidator(5);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'} name={'email'} component={Input} TypeField={'input'}
                       validate={[required, minLengthValidator5, maxLengthValidator35]}/>
            </div>
            <div>
                <Field type={'password'} placeholder={'Password'} name={'password'} component={Input}
                       TypeField={'input'} validate={[required, minLengthValidator5, maxLengthValidator15]}/>
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={Input} TypeField={'input'}/>remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        let {email, password, rememberMe} = formData;
        props.loginUser(email, password, rememberMe)
    };

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {loginUser})(Login);
