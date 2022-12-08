import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login_input() {
    const navigate = useNavigate ();

    const initialValues = {
        email: "",
        password: ""
    };

    const loginSubmit = (data) => {
        axios.post("http://localhost:3001/user/login", data).then((response) => {
            if (response.data.error) {
                alert(response.data.error);
            } else {
                localStorage.setItem("accesstoken", response.data.accesstoken);
                navigate("/");
                window.location.reload();
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
            onSubmit={loginSubmit}
            validationSchema={validationSchema}>
            <Form className='login-input-container'>
                <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                    className='login-input' />
                <ErrorMessage name="email" component="p" className="error-message" />
                <Field
                    type="password"
                    name="password"
                    placeholder="Password"
                    className='login-input' />
                <ErrorMessage name="password" component="p" className="error-message" />
                <button type='submit' className='login-input-butt'>Sign In</button>
            </Form>
        </Formik>
    )
}

export default Login_input