import React, {useRef, useEffect, useState} from "react";
import {useSubmit} from "../../hooks/useSubmit";

export function LogInForm() {
     const {submit, response} = useSubmit();

     // is Valid form
     const [isValid, setIsValid] = useState<boolean>(false);
     //checking inputs value
     const [prevValue, setPrevValue] = useState<string>('');


     const inputEmail = useRef<HTMLInputElement>({} as HTMLInputElement);
     const inputPassword = useRef<HTMLInputElement>({} as HTMLInputElement);

     function clickHandler(e: React.MouseEvent<HTMLButtonElement>){
          e.preventDefault()

          // document.querySelectorAll('.form__input').forEach(e => console.log(e.value))
          console.log('You are logged in')
     }
     function submitHandler(e: React.FormEvent<HTMLFormElement>){
          e.preventDefault()
          const data = {
               email: inputEmail.current.value,
               password: inputPassword.current.value
          }

          submit(data)
          console.log('submit')
     }

     function changeHandler(venue: string): void{
          if(venue === 'email'){
               setPrevValue(inputEmail.current.value)
          } else {
              setPrevValue(inputPassword.current.value)
          }
     }
     useEffect(() => {
          if(inputEmail.current.value && inputPassword.current.value){
               setIsValid(true)
               console.log("from useEffect")
          }
     }, [prevValue])

     return (
          <div>
               <form onSubmit={submitHandler} className='form'>
                    <h1 className="form__title">LogIn</h1>
                    <input type="text" placeholder="Email" className="form__input" ref={inputEmail} onChange={() => changeHandler('email')}></input>
                    <input type="text" placeholder="Password" className="form__input" ref={inputPassword} onChange={() => changeHandler('password')}></input>
                    <button onClick={clickHandler} className='form__button' disabled={!isValid}>LogIn</button>
               </form>
          </div>
     )
}