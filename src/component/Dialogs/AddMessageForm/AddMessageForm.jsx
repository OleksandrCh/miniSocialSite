import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthValidator, required} from "../../../utils/validators/validators";

const maxLength50 = maxLengthValidator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} TypeField={'textarea'} validate={[required, maxLength50]} placeholder='Enter your message'
                       name={'newMessageBody'}/>
            </div>
            <div>
                <button>Add Message</button>
            </div>
        </form>
    )
};

export const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);
