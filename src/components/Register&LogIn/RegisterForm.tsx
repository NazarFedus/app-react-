import React, {useState, useRef} from "react";
import {useSubmit} from "../../hooks/useSubmit";
import {Formik} from "formik";
import * as Yup from "yup";
import { errorMonitor } from "events";

const error = {
     color: 'red',
     fontSize: '15px',
     margin: '0',
     padding: '0',
}

export function RegisterForm() {

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
               onSubmit = { values => {console.log(values)}}
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
                    <form className='form'>
                    <h1 className="form__title">Register</h1>
                         <p>
                              <label htmlFor="name">Name</label><br/>
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
                    { touched.name && errors.name && <p style={{color: 'red'}}>{errors.name}</p>}

                         <p>
                              <label htmlFor="email">Email</label><br/>
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
                    { touched.email && errors.email && <p style={error}>{errors.email}</p>}

                         <p>
                              <label htmlFor="password">Password</label><br/>
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
                    { touched.password && errors.password && <p style={{color: 'red'}}>{errors.password}</p>}

                         <p>
                              <label htmlFor="confirmPassword">Confirm Password</label><br/>
                              <input
                                   type="password"
                                   name="confirmPassword"
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.password}
                                   className="form__input"
                                   placeholder="Confirm password" >
                              </input>
                         </p>
                    { touched.confirmPassword && errors.confirmPassword && <p style={{color: 'red'}}>{errors.confirmPassword}</p>}


                    <button type='submit' disabled={!isValid && !dirty} className='form__button'>Register</button>
               </form>
          )}
          </Formik>
     </div>
     )
}