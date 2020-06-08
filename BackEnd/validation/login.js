//Importing validator module used to validate input data
const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateLoginInput(data){
    let errors = {};

    // To convert empty fields into string to use with validator functions
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";

    // For checking that email and password field should not be empty
    if (Validator.isEmpty(data.email)) {
        errors.email = "Email field is required";
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = "Password field is required";
      }
    //Return errors if any else & return isValid- true or false
    return{
        errors,
        isValid: isEmpty(errors)
    };
};