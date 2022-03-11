import {useState} from "react"

const useInput = (validationFunc) =>{
    const [inputValue, setInputValue] = useState("");
    const [isTouched, setIsTouched] = useState(false);
    
    const valueIsValid = validationFunc ? validationFunc(inputValue) : false;
    const inputIsInvalid = !valueIsValid && isTouched;

    const onChangeHandler = (event) =>{
        setInputValue(event.target.value);
    }

    const onBlurHandler = (event) =>{
        setIsTouched(true);
    }

    const reset = () => {
        setInputValue("");
        setIsTouched(false);
    }


    return{
        value:inputValue,
        valueIsValid,
        inputIsInvalid,
        onChangeHandler,
        onBlurHandler,
        reset

    }
}

export default useInput;