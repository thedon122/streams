import React from "react";
import { Field, formValues, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
    renderInput( {input, label}) {
        return (
        <div>
            <label>{label}</label>
            <input {...input} />
        </div>
        );
    }

    onSubmit(formValues) {
        console.log(formValues);
    }
    render (){
        return (
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} 
        className="ui form"
        >
            <Field name="title" component={this.renderInput} label="Enter Title" />
            <Field name="Description" component={this.renderInput} label="Enter Description" />
            <button className="ui button primary">Submit</button>
        </form>
        );
    }
};

const validate = (formValues) => {
    const errors = {};
    if (!formValues.title) {
        errors.title = 'You must enter a title';
    }

    if (!formValues.description) {
        errors.description = 'You must enter a description';
    }

    return errors;
};

export default reduxForm({
    form: 'streamCreate'
})(StreamCreate);