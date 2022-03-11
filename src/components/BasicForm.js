import useForm from "../hooks/use-input";
import "../index.css";

const BasicForm = (props) => {
  const validateFirstName = (value) =>{
    return(
      value.trim() !== ''
    )
  }
  const {
    value:firstNameValue,
    valueIsValid:firstNameIsValid,
    inputIsInvalid:firstNameInputIsValid,
    onChangeHandler:onFirstNameInputChangeHandler,
    onBlurHandler:onFirstNameBlurHandler,
    reset:firstNameReset} = useForm(validateFirstName)

  return (
    <form>
      <div className='control-group'>
        <div className='form-control'>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' />
        </div>
        <div className='form-control'>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' />
        </div>
      </div>
      <div className='form-control'>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' />
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
