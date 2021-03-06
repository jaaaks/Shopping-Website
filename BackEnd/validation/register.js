//Importing validator module which is used to validate input data
const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateRegisterInput(data){
    let errors = {};

    // To convert empty fields into string to use with validator functions
    data.name = !isEmpty(data.name) ? data.name : "";
    data.number = !isEmpty(data.number) ? data.number : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";

    //Performing Various Checks
    if (Validator.isEmpty(data.name)) {
        errors.name = "Name field is required";
      }

    if (Validator.isEmpty(data.email)) {
        errors.email = "Email field is required";
    } else if(!Validator.isEmail(data.email)){
        errors.email = "Email is invalid";
    }

    if (Validator.isEmpty(data.number)) {
        errors.number = "Number field is required";
      }
    
    if (Validator.isEmpty(data.password)) {
        errors.password = "Password field is required";
      }
    
    if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = "Password must be between 6 to 30 characters";
      }
      // Return error if any else return boolean value isValid
    return{
        errors,
        isValid: isEmpty(errors)
    };
};