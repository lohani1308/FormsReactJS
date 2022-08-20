import { useState } from "react";
import UseInput from "../hooks/use-input";


const SimpleInput = (props) => {
  console.log("rendering simple......!");

  let isDisable=false;

  const {
    value :usernameInput,
    hasError:nameInputError,
    valueChangeHandler:nameChangeHandler,
    valueBlurHandler:nameBlurHandler,
    reset:resetnameInput
  }=UseInput(val=>val.trim()!=='');

  const {
    value :useremailInput,
    hasError:emailInputError,
    valueChangeHandler:emailChangeHandler,
    valueBlurHandler:emailBlurHandler,
    reset:resetemailInput
  }=UseInput(value=>value.includes('@'));
  
  const formSubmissionHandler=(event)=>{
      event.preventDefault();

      if(nameInputError || emailInputError){
        isDisable=true;
      }

      resetnameInput();
      resetemailInput();
  }
  
  const nameinputclassValid=(nameInputError) ?'form-control invalid':'form-control';
  const emailinputclassValid=(emailInputError) ?'form-control invalid':'form-control'

  if(nameInputError || emailInputError){
    isDisable=true;
  }

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameinputclassValid}>
        <label htmlFor='name'>Your FirstName</label>
        <input 
          type='text' 
          id='name'
          value={usernameInput} 
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />

        {nameInputError && <p className="error-text">Name must not be empty</p>}
      
      </div>

       <div className={emailinputclassValid}>
        <label htmlFor='email'>Your Email Id</label>
        <input 
          type='text' 
          id='email'
          value={useremailInput} 
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />

        {emailInputError&& <p className="error-text">Enter the correct email</p>}
      
      </div> 

      <div className="form-actions">
        <button disabled={isDisable}>Submit</button>
      </div>

    </form>
  );
};

export default SimpleInput;
