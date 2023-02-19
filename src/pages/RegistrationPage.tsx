import React from "react";
import { RegisterForm } from "../components/Register&LogIn/RegisterForm";
import { LogInForm } from "../components/Register&LogIn/LogIn";
import {useState} from "react";


export function Registration() {
     const [status, setStatus] = useState('register')


     return (
          <div className="background">
               <button onClick={() => setStatus('register')} >Register</button>
               <button onClick={() => setStatus('logIn')} >LogIn</button>

               {status === 'register' && <RegisterForm></RegisterForm>}
               {status === 'logIn' && <LogInForm></LogInForm>}
          </div>
          )
}