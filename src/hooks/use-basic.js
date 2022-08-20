//Custom Hook For All Input field

import { useState } from "react";

const useBasic=(Validate)=>{
    const [inputval,setinputval]=useState('');
    const [istouched,setIstouched]=useState('');

    
    const hasError=!Validate(inputval) && istouched;

    const InputHandler=(event)=>{
        setinputval(event.target.value);
    }

    const InputBlurHandler=()=>{
        setIstouched(true);
    }

    const reset=()=>{
        setinputval('');
    }

    return {
        inputval,
        hasError,
        InputHandler,
        InputBlurHandler,
        reset
    };

}

export default useBasic;