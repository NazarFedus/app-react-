import React, {useState, useRef} from "react";
import {useSubmit} from "../../hooks/useSubmit";
import {Formik} from "formik";
import * as Yup from "yup";
import { errorMonitor } from "events";

const error = {
     color: 'red',
     fontSize: '15px',
     margin: '0px',
     padding: '0px',
}

export function RegisterForm() {
     const {submit} = useSubmit();

return (
     <div>
          <Formik
               initialValues = {{
                    name: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
               }}
               validateOnBlur
               onSubmit = { values => {submit(values)}}
               validationSchema = {Yup.object().shape({
               name: Yup.string().required('Required'),
               email: Yup.string().email('Invalid email address').required('Required'),
               password: Yup.string()
                         .min(8, 'Must be 8 characters or more')
                         .required('Required'),
               confirmPassword: Yup.string()
                         .oneOf([Yup.ref('password')], 'Passwords must match')
                         .required('Required')
          })}
          >
               {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
                    <form className='form' onSubmit={handleSubmit}>
                    <h1 className="form__title">Register</h1>
                         <p>
                              { touched.name && errors.name && <p style={error}>{errors.name}*</p>}
                              <input
                                   type="text"
                                   name="name"
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.name}
                                   className="form__input"
                                   placeholder="Name" >
                              </input>
                         </p>

                         <p>
                         { touched.email && errors.email && <p style={error}>{errors.email}*</p>}
                              <input
                                   type="text"
                                   name="email"
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.email}
                                   className="form__input"
                                   placeholder="Email" >
                              </input>
                         </p>

                         <p>
                         { touched.password && errors.password && <p style={error}>{errors.password}*</p>}
                              <input
                                   type="password"
                                   name="password"
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.password}
                                   className="form__input"
                                   placeholder="Password" >
                              </input>
                         </p>

                         <p>
                         { touched.confirmPassword && errors.confirmPassword && <p style={error}>{errors.confirmPassword}*</p>}
                              <input
                                   type="password"
                                   name="confirmPassword"
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.confirmPassword}
                                   className="form__input"
                                   placeholder="Confirm password" >
                              </input>
                         </p>


                    <button type='submit' disabled={!isValid && !dirty} className='form__button'>Register</button>
               </form>
          )}
          </Formik>
     </div>
     )
}