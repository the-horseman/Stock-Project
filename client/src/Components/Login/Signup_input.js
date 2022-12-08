import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup_input() {

    const navigate = useNavigate();

    const initialValues = {
        FName: "",
        LName: "",
        email: "",
        password: ""
    };

    const registerSubmit = (data) => {
        axios.post("http://localhost:3001/user/register", data).then((response) => {
            if (response.data.error) {
                alert(response.data.error);
                if (response.data.error === "User already exists") {
                    navigate("/login");
                }
            } else {
                alert(response.data.success);
                navigate("/login");
            }
        });
    };

    const validationSchema = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().required()
    });
    return (
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={registerSubmit}>
            <Form className='login-input-container'>
                <div className='name-container'>
                    <Field 
                        type="text" 
                        name="FName"
                        placeholder='First Name' 
                        className='name-input' />
                    <Field 
                        type="text" 
                        name="LName"
                        placeholder='Last Name' 
                        className='name-input' />
                </div>
                <Field 
                    type="text" 
                    name="email"
                    placeholder='Email' 
                    className='login-input' />
                <ErrorMessage name="email" component="p" className="error-message" />
                <Field 
                    type="password"
                    name="password"
                    placeholder='Password' 
                    className='login-input' />
                <ErrorMessage name="password" component="p" className="error-message" />
                <button type='submit' className='login-input-butt'>Sign Up</button>
            </Form>
        </Formik>
    )
}

export default Signup_input