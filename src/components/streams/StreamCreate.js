import React from 'react'
import{Field, reduxForm} from 'redux-form'
class StreamCreate extends React.Component{
    //destruccture input 
    renderInput({input, label}){
        //take the form props input property
        //look at the .input and get all the properties that belong
        //and add them all to formProps
        return (<div className="field" >
                <label>{label}</label>
                <input {...input}/>
                </div>)
    }
    //the formValues are the values that the form Recieve
    onSubmit(formValues){
        //redux form already calls this for us so we dont have to epxlcitly do so
        //event.preventDefault();// keeps the browser from refreshing 
    }
    render() {
        // onsubmit has this.props.handleSubmit, and in that our helper function, this is because were using the f
       return ( <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form" >
            <Field name="title" component={this.renderInput} label="Enter Title "/>
            <Field name="description" component={this.renderInput} label="Enter Description "/>
            <button className="ui button primary">Submit</button>
        </form>)
    }
}
        //returns a function 
        //and we immediately call that function with streamCreate
export default reduxForm({
    form:'streamCreate'
})(StreamCreate)
