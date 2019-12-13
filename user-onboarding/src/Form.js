import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';


const UserForm = ({ values, errors, touched, status }) => {
    console.log('values', values);
    console.log('errors', errors);
    console.log('touched', touched);

    const [users, setUsers] = useState([]);

    useEffect(() => {
        console.log('status has changed', status);
        status && setUsers(users => [...users, status]);
    }, [status]);

    return (
        <div className='userForm'>


            <Form>
                <label htmlFor='userName'>User Name:</label>
                <Field
                    id='userName'
                    type='text'
                    name='userName'
                    placeholder='enter userName'
                />


                <label htmlFor='email'>Email:</label>
                <Field
                    id='email'
                    type='email'
                    name='email'
                    placeholder='enter email please'
                />

                <label htmlFor='password'>Password:</label>
                <Field
                    id='password'
                    type='text'
                    name='password'
                    placeholder='enter password please, but keep it a secret'
                />

                <label className='termsOfService'>Have you read the Terms of Service?</label>
                <Field
                    type='checkbox'
                    name="termsOfService"
                // checked={}
                />
                <button type='submit'>Submit your info, it's MINE now!</button>


            </Form>

            {users.map(user => {
                return (
                    <ul key={user.id}>
                        <li>UserName: {user.userName}</li>
                        <li>Email: {user.email}</li>
                    </ul>
                )
            })}

        </div>
    )
};


const FormikUserForm = withFormik({

    mapPropsToValues(props) {
        return {
            userName: props.userName || '',
            email: props.email || '',
            password: props.password || '',
            termsOfService: props.termsOfService || ''
        };
    },

    validationSchema: Yup.object().shape({
        userName: Yup.string().required(),
        password: Yup.string().required('HEY, you really need a password')
    }),

    handleSubmit(values, { setStatus, resetForm }) {
        console.log('submitting', values);
        axios
            .post('https://reqres.in/api/users/', values)
            .then(response => {
                console.log('success', response);
                setStatus(response.data);
                resetForm();
            })
            .catch(err => console.log(err.response));
    }


})(UserForm);

export default FormikUserForm;