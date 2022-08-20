import { useEffect,useState } from "react";


const Oldsimple = (props) => {

  console.log("re-render");

  const [enteredName,setenteredName]=useState('');
  const [enterdemail,setEnteredemail]=useState('');
  const [wastouched,setWastouched]=useState(false);
  const [formValid,setFormValid]=useState(true);
  const [validemail,setValidemail]=useState(true);

  function ValidateEmail(mail) 
  {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
        {
          return (true)
        }
      return (false)
  }


 let valid=(wastouched && (enterdemail.length!==0 || enteredName.length!==0 || ValidateEmail(enterdemail)));

  useEffect(()=>{
    console.log('In useeffect');
    if(!wastouched){
        valid=!valid;
    }
  },[wastouched]);
  
  const InputChangeHandler=(event)=>{
      setWastouched(true);
    
      if(event.target.id==="email"){
        if(!ValidateEmail(event.target.value)){
          setValidemail(false);
        }
        else{
          setValidemail(true);
        }
        setEnteredemail(event.target.value);
      }

      if(event.target.id==="name"){
        setenteredName(event.target.value);
      }

      if(event.target.value.trim()!==''){
        valid=!valid;
        return;
      }

  }

  const InputFocusHandler=(event)=>{
    
    if(!valid){
        setFormValid(false);
        return;
    }
    setFormValid(true);
    
  }

  const InputBlurHandler=(event)=>{
      setWastouched(true);
      
      if(!valid){
        setFormValid(false);
        valid=!valid;
        return;
      }

  }

  const formSubmissionHandler=(event)=>{
      event.preventDefault();

      setWastouched(true);

      if(!valid){
        //console.log("OK");
        setFormValid(false);
        return;
      }



      setenteredName('');
      setEnteredemail('');
     // nameRef.current.value='';//not ideal because we are directly manipulating DOM
  }

  const classValid=(!valid && wastouched) ?'form-control invalid':'form-control'
 // console.log(classValid);

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={classValid}>
        <label htmlFor='name'>Your FirstName</label>
        <input 
          type='text' 
          id='name'
          value={enteredName} 
          onChange={InputChangeHandler}
          onBlur={InputBlurHandler}
          onFocus={InputFocusHandler}
        />
      
      </div>

      <div className={classValid}>
        <label htmlFor='email'>Your Email Id</label>
        <input 
          type='text' 
          id='email'
          value={enterdemail} 
          onChange={InputChangeHandler}
          onBlur={InputBlurHandler}
          onFocus={InputFocusHandler}
        />

        {!validemail && <p style={{color:'red'}}>Enter the correct email</p>}
      
      </div>

      <div className="form-actions">
        <button disabled={!formValid}>Submit</button>
      </div>

      {(!valid && wastouched) && <p style={{color:'red'}}>Please Enter Name</p>}
    </form>
  );
};

export default Oldsimple;
