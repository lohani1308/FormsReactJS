import { useState } from "react";

const UseInput=(validateValue)=>{
    console.log("use input.....!");
    const [enteredValue,setEnteredValue]=useState('');
    const [isTouched,setIstouched]=useState(false);

    //So the value is valid logic must not be hardcoded so to make it dynamic according to input data we will accept
    //value as a prop

    const valueIsValid=validateValue(enteredValue);
    const hasError=!valueIsValid && isTouched;

    const valueChangeHandler=(event)=>{
        setEnteredValue(event.target.value);
    }

    const valueBlurHandler=(event)=>{
        setIstouched(true);
    }

    const reset=()=>{
        setEnteredValue('');
        setIstouched(false);
    }

    return{
        value:enteredValue,
        hasError,
        valueChangeHandler,
        valueBlurHandler,
        reset
    }
}

export default UseInput;