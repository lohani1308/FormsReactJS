import { useState } from "react";
import useBasic from "../hooks/use-basic";

const BasicForm = (props) => {

  let formValid=true;

  const {
    inputval:fname,
    hasError:fnameValid,
    InputHandler:fnameHandler,
    InputBlurHandler:fnameBlurHandler,
    reset:resetfname

  }=useBasic(val=>val.trim()!=='');

  const {
    inputval:lname,
    hasError:lnameValid,
    InputHandler:lnameHandler,
    InputBlurHandler:lnameBlurHandler,
    reset:resetlname

  }=useBasic(val=>val.trim()!=='');
  
  if(fnameValid || lnameValid){
    formValid=false;
  }

  const formSubmit=(event)=>{
    if(fnameValid || lnameValid){
      formValid=false;
    }
    event.preventDefault();
    resetfname();
    resetlname();
  }

  const fnameValidclass=fnameValid?'form-control invalid':'form-control';
  const lnameValidclass=lnameValid?'form-control invalid':'form-control';

  return (
    <form onSubmit={formSubmit}>
      <div className='control-group'>
        <div className={fnameValidclass}>
          <label htmlFor='name'>First Name</label>
          <input 
            type='text' 
            id='name' 
            value={fname}
            onChange={fnameHandler}
            onBlur={fnameBlurHandler}
            />
            {fnameValid && <p className="error-text">Enter first name </p>}
        </div>
        
        

        <div className={lnameValidclass}>
          <label htmlFor='lname'>Last Name</label>
          <input 
            type='text' 
            id='lname' 
            value={lname}
            onChange={lnameHandler}
            onBlur={lnameBlurHandler}
            />

      {lnameValid && <p className="error-text">Enter last name </p>}
      </div>
      </div>
      <div className='form-control'>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' />
      </div>
      <div className='form-actions'>
        <button disabled={!formValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
