import React from "react";
import { RegisterForm } from "../components/Register&LogIn/RegisterForm";
import { LogInForm } from "../components/Register&LogIn/LogIn";
import {useState} from "react";


export function Registration() {
     const [status, setStatus] = useState('register')

     function clickHandler(venue: string) {
          setStatus(venue)

     }


     return (
          <div className="background">
               <div style={{display: 'flex', justifyContent: 'center', paddingTop: '10px'}}>
                    <button onClick={() => clickHandler('register')} style={{padding: "15px"}}>Register</button>
                    <button onClick={() => clickHandler('logIn')} >LogIn</button>
               </div>

               {status === 'register' && <RegisterForm></RegisterForm>}
               {status === 'logIn' && <LogInForm></LogInForm>}
          </div>
          )
}