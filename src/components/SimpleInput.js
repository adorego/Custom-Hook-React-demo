import "../index.css"

import React,{useState} from "react";

import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {value:enteredName, 
    valueIsValid:enteredNameIsValid, 
    isInValid:inputNameIsInvalid,
    onChangeHandler:onNameChange,
    onBlurChange:onNameBlur} = useInput((value) => value.trim() !== '');

  // const [enteredName, setEnteredName] = useState("");
  // const [isTouched, setIsTouched] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [isEmailTouched, setIsEmailTouched] = useState(false);


  // const enteredNameIsValid = enteredName.trim() !== '';
  // const inputNameIsInvalid = !enteredNameIsValid && isTouched;

  const enteredEmailIsValid = enteredEmail.includes('@') ? true : false;
  const inputEmailIsInValid = !enteredEmailIsValid &&  isEmailTouched;

  let formIsValid = false;
  
  if(enteredNameIsValid && enteredEmailIsValid){
    formIsValid = true;
  }

  

  const onSubmit = (event) =>{
    event.preventDefault();
    
    if(!formIsValid){
      return
    }
    
    console.log('The form is valid');
    
  }

  const onBlurInputEmail = (event) =>{
    setIsEmailTouched(true);
  }

  const onChangeEmail = (event) =>{
    setEnteredEmail(event.target.value);
  }

  const forInpuNameClasses = !inputNameIsInvalid ? 'form-control' : 'form-control invalid';
  const forInpuEmailClasses = !inputEmailIsInValid ? 'form-control' : 'form-control invalid';

  return (
    <form autoComplete="off" onSubmit={onSubmit}>
      <div className={forInpuNameClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          type='text' 
          id='name' 
          onBlur={onNameBlur}
          onChange={onNameChange}
          value={enteredName}
        />
        {inputNameIsInvalid && <p className="error-text">The name shouldn´t be empty!</p>}
      </div>
      
      <div className={forInpuEmailClasses}>
        <label htmlFor='name'>Your email</label>
        <input 
          type='text' 
          id='name' 
          onBlur={onBlurInputEmail}
          onChange={onChangeEmail}
          value={enteredEmail}
        />
        {inputEmailIsInValid && <p className="error-text">The email is invalid or empty</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
