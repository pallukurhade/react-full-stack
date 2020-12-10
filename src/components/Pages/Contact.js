import React, {Component} from 'react';
import Field from '../Common/Field';
import {withFormik} from 'formik';
import * as Yup from 'yup';

const fields = {
  sections : [
    [  
        { name: 'name', elementName: 'input', type:'text', placeholder: 'Your Name*'},
        { name: 'email', elementName: 'input', type:'email', placeholder: 'Your Email*'},
        { name: 'phone', elementName: 'input', type:'text', placeholder: 'Your Phone No*'}
    ],
    [
        { name: 'message', elementName: 'textarea', type:'text', placeholder: 'Your Message*'}
    ]
  ]

}


class Contact extends Component {


   render(){
     return(
        <section className="page-section" id="contact">
        <div className="container">
            <div className="text-center">
                <h2 className="section-heading text-uppercase">Contact Us</h2>
                <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
            <form id="contactForm" name="sentMessage" novalidate="novalidate" onSubmit={this.props.handleSubmit}>
                <div className="row align-items-stretch mb-5">
                   {fields.sections.map((section, sectionIndex) => {
                     return (
                         <div className="col-md-6" key={sectionIndex}>
                             {section.map((field, i) => {
                                 return <Field 
                                 {...field} 
                                 key={i} 
                                 value = {this.props.values[field.name]}
                                 name = {field.name}
                                 onChange = {this.props.handleChange}
                                 onBlur  = {this.props.handleBlur}
                                 touched = {this.props.touched[field.name]}
                                 errors = {this.props.errors[field.name]}
                                 />
                             })}
                             
                         </div>
                     )
                 })}    
                <div className="text-center">
                    <div id="success"></div>
                    <button className="btn btn-primary btn-xl text-uppercase" 
                    id="sendMessageButton" 
                    type="submit">Send Message</button>
                </div>
              </div>  
            </form>
        </div>
    </section>

     )

   }


}


export default withFormik({
    mapPropsToValues: () => ({
        name : '',
        email: '',
        phone: '',
        message:'',
    }),
    validationSchema: Yup.object().shape({
       name: Yup.string().min(3,'Name should be longer than this').required('You Should Enter the Name.'),
       email: Yup.string().email('Invalid Email').required('We need your email.'),
       phone: Yup.string()
       .min(10,'Please provide 10 digit.')
       .max(15, 'Your phone number is too long.')
       .required('We need your Number yo reach you out.'),
       message: Yup.string()
       .min(500,'Please provide us more information.')
       .required('Message is required.')
    }),
    handleSubmit: (values, {setSubmitting}) => {
        console.log("Values", values);
        alert("You've submitted the form", JSON.stringify(values));
    }
})(Contact);