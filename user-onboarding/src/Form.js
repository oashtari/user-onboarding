import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';


const UserForm = ({} => {


    const [user, setUser] = useState([]);

    useEffect(() => {

    }, [])

    return (
        <div className='userForm'>


            <Form>
                {
                    <Field
                        id='userName'
                        type='text'
                        name='userName'
                        placeholder='enter userName'
                    />

                    <label htmlFor='email'>Email</label>
                    <input
                        id='email'
                        type='email'
                        name='email'
                        placeholder='enter email please'
                    />

                    <Field
                        id='password'
                        type='text'
                        name='password'
                        placeholder='enter password please, but keep it a secret'
                    />

                    <label className='termsOfService'>Have you read the Terms of Service?</label>
                    <Field
                        type='checkbox'
                        name="termsOfServices"
                    // checked={}
                    />
                    <button type='submit'>Submit your info, it's MINE now!</button>

                }


            </Form>
        </div>
    )
}



name, email, password, TOS(checkbox), submit button