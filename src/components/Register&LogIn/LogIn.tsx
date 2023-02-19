import React from "react";

export function LogInForm() {

     function clickHandler(e: React.MouseEvent<HTMLButtonElement>){
          e.preventDefault()
          alert('You are logged in')
     }
     function submitHandler(e: React.FormEvent<HTMLFormElement>){
          e.preventDefault()
          console.log('submit')
     }
     return (
          <div>
               <form onSubmit={submitHandler} className='form'>
                    <h1 className="form__title">LogIn</h1>
                    <input type="text" placeholder="Email" className="form__input"></input>
                    <input type="text" placeholder="Password" className="form__input"></input>
                    <button onClick={clickHandler} className='form__button'>LogIn</button>
               </form>
          </div>
     )
}