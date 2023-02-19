import React, {useState} from "react";

export function RegisterForm() {
     const [valid, setValid] = useState(false)

     function clickHandler(e: React.MouseEvent<HTMLButtonElement>){
          e.preventDefault()
          alert('You are registered')
     }
     function submitHandler(e: React.FormEvent<HTMLFormElement>){
          e.preventDefault()
          console.log('submit')
     }

     return (
          <div>
               <div>
               <form onSubmit={submitHandler} className='form'>
                    <h1 className="form__title">Register</h1>
                    <input type="text" placeholder="Name" className="form__input"></input>
                    <input type="text" placeholder="Email" className="form__input"></input>
                    <input type="text" placeholder="Password" className="form__input"></input>
                    {valid && <input type="text" placeholder="Confirm Password" className="form__input"></input>}
                    <button onClick={clickHandler} className='form__button'>Register</button>
               </form>
          </div>
          </div>
     )
}