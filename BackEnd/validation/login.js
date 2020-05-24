const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateLoginInput(data){
    let errors = {};

    // To convert empty fields into string to use with validator functions
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";

    // Various Checks
    if (Validator.isEmpty(data.email)) {
        errors.email = "Email field is required";
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = "Password field is required";
      }

    return{
        errors,
        isValid: isEmpty(errors)
    };
};