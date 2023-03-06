import React, {useState, useRef} from "react";
import {useSubmit} from "../../hooks/useSubmit";
import {useFormik} from "formik";
import * as Yup from "yup";

export function RegisterForm() {
     const [valid, setValid] = useState(true)
     const {submit} = useSubmit()

     function clickHandler(e: React.MouseEvent<HTMLButtonElement>){
          e.preventDefault()
          alert('You are registered')
     }
     function submitHandler(e: React.FormEvent<HTMLFormElement>){
          e.preventDefault()
          formik.submitForm()
          console.log(formik.values)
          submit(formik.values)
     }


     const formik = useFormik({
          initialValues: {
               name: '',
               email: '',
               password: '',
               confirmPassword: ''
          },
          onSubmit: values => {
               submit(values)
          },
          validationSchema: Yup.object({
               name: Yup.string().required('Required'),
               email: Yup.string().email('Invalid email address').required('Required'),
               password: Yup.string()
                         .min(8, 'Must be 8 characters or more')
                         .required('Required'),
               confirmPassword: Yup.string()
                         .oneOf([Yup.ref('password')], 'Passwords must match')
                         .required('Required')
          }),
          })


     return (
          <div>
               <div>
               <form onSubmit={submitHandler} className='form'>
                    <h1 className="form__title">Register</h1>
                    <input type="text" name="name" onChange={formik.handleChange} placeholder="Name" className="form__input"></input>
                    <input type="text" placeholder="Email" className="form__input"></input>
                    <input
                         type="password"
                         placeholder="Password"
                         // onChange={changeHandler}
                         className="form__input">
                    </input>
                    <input type="text" placeholder="Confirm Password" className="form__input" disabled={valid}></input>
                    <button onClick={clickHandler} className='form__button'>Register</button>
               </form>
          </div>
          </div>
     )
}