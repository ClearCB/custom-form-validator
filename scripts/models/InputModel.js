export class InputModel {
    value;
    valueValidation;
    labelName;
    validation;
    errorMessages;

    /**
     * 
        value is the actual value of the input
        
        valueValidation is the actual value of the input that will be parsed to
        check the validationRules

        labelName is the name that will be give to the input 

        Validation will store the rules function that will make the value to complish
        specified rule.

        Error messages are going to be display in case that validation
        does not goes well.
    */
    constructor(value, valueValidation, labelName, validation, errorMessages) {
        this.value = value;
        this.valueValidation = valueValidation;
        this.labelName = labelName;
        this.validation = validation;
        this.errorMessages = errorMessages;
    }


}