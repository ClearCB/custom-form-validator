import { Constants } from "./constants.js";
import { HtmlGenerator } from "./htmlGenerator.js";
import { ValidationRules } from "./validationRules.js";

/**
 * In this class we store all the general and common functions 
 * that our application needs
 */
export class Functions {
    validationRules = new ValidationRules();
    htmlGenerator = new HtmlGenerator();
    constants = new Constants();

    // ###### PREPARING THE HTML INPUTS ######

    /**
     * Write and prepare the form inputs
     */
    prepareForm(form) {

        // We generate the form inputs
        this.generateFormSections(form);
    }

    /**
     * This function will generate the full form inputs.
     * 
     * Actually we are using the class FormModel to generate
     * the full form.
     * 
     */
    generateFormSections(form) {

        // We iterate in our form
        for (const sectionId in form) {

            // For each section, we generate their inputs
            let formSection = form[sectionId];
            this.generateSection(formSection);

        }
    }

    /**
     * This function will generate the full section of inputs of the object.
     * 
     * The section has different parts: a title and a group of inputs.
     * 
     * This section is each atribute in the class FormModel.
     */
    generateSection(formSection) {

        // We iterate for our section
        for (const inputId in formSection) {
            let input = formSection[inputId];

            // Generating the input title
            if (inputId === "title") {

                this.addNewHeaderContent(input);
                continue;
            }

            // Generate the input content
            this.generateInput(formSection, input, inputId)

        }
    }


    /**
     * This function will complete the generation of each
     * input and all related to it: additional information and type
     * selections.
     */
    generateInput(formSection, input, inputId) {
        // Generate the input parts
        this.addNewInputRow(input, inputId);
        this.addAdditionalInfoRuleToLabel(formSection, inputId);
        this.addAdditionalInfoTypeToLabel(inputId);

        // Transform password input type
        if (inputId === "password") {

            this.changePasswordInputType();
        }
    }

    /**
     * This generate a new header for a section
     */
    addNewHeaderContent(inputValue) {
        let headerContent = this.htmlGenerator.generateNewHeader(inputValue);
        document.getElementById("mainContent").innerHTML += this.htmlGenerator.addNewRow(headerContent);
    }

    /**
     * This generate a new input row
     */
    addNewInputRow(input, inputId) {
        let inputName = input["labelName"];
        let inputContent = this.htmlGenerator.generateNewInput(inputId, inputName);
        document.getElementById("mainContent").innerHTML += this.htmlGenerator.addNewRow(inputContent);
    }

    /**
     * This change the type of the input password
     */
    changePasswordInputType() {
        document.getElementById("password").type = "password";
    }

    /**
     * This will add the additional information of each 
     * label related to the validation rules that are applied
     * to the input.
     */
    addAdditionalInfoRuleToLabel(formSection, inputId) {
        // We get the additional information object
        const additionalInfoRule = this.constants.ADDITIONAL_INFORMATION_INPUT_RULE;
        // We get the name of the validation rule
        const infoRulesKey = Object.keys(additionalInfoRule);

        // We select the validation rules of the input
        let validationRulesInput = formSection[inputId]["validation"];
        // We filter the validation rules that have a message of additional information
        let additionalInfo = validationRulesInput.filter((validationRule) => infoRulesKey.includes(validationRule.name));

        if (additionalInfo.length > 0) {

            // For each new additional information, we add it to the label.
            additionalInfo.forEach((validation) => {

                // For each message in the information we add it
                let info = additionalInfoRule[validation.name];

                info.forEach((info) => {

                    this.getLabelInput(inputId).innerHTML += info;
                })
            })
        }
    }

    /**
     * This will add the additional information of each 
     * label related to the type of input it is.
     */
    addAdditionalInfoTypeToLabel(inputId) {
        // We get the additional information object
        const additionalInfoType = this.constants.ADDITIONAL_INFORMATION_INPUT_TYPE;
        // We get the name of the validation rule
        const infoRulesKey = Object.keys(additionalInfoType);

        // We filter the additional information that is present to the input id.
        let additionalInfo = infoRulesKey.includes(inputId);

        if (additionalInfo) {

            // For each new additional information, we add it to the label.
            let info = additionalInfoType[inputId];

            info.forEach((info) => {

                this.getLabelInput(inputId).innerHTML += info;
            })
        }
    }

    // ###### END OF: PREPARING THE HTML INPUTS ######

    // ###### GET THE INPUT VALUES: INDIVIDUAL / GROUP ######

    /**
     * This function will iterate from the FormModel and will get the 
     * input values using the name input and will fill the new 
     * model with the values to store it.
     */
    getFormValues(formValues) {
        for (const sectionId in formValues) {

            let section = formValues[sectionId];
            for (const inputId in section) {

                if (inputId === "title") continue;
                // We get the input content and the value of it
                this.getInputValue(formValues, sectionId, inputId);
            }
        }
    }

    /**
     * This function will get the value of the input objective
     * and add it to the object value, so we can access it from
     * outside
     */
    getInputValue(form, sectionId, inputId) {
        let inputValue = this.getInputContent(inputId);

        inputValue = inputValue.trim();
        form[sectionId][inputId]["value"] = inputValue;
    }


    // ###### END OF: GET THE INPUT VALUES: INDIVIDUAL / GROUP ######

    // ###### GETTERS ######

    /**
     * This function will return input element of the object forms
     */
    getInput(form, sectionId, inputId) {
        return form[sectionId][inputId];
    }

    /**
     * This function will return the label element of the input name provided
     */
    getLabelInput(inputId) {
        return document.getElementById("label_" + inputId);
    }

    /**
     * This function will return the validation of the input name provided
     */
    getValidationElement(inputId) {
        return document.getElementById("validation_" + inputId);
    }

    /**
     * This function will return the content element of the input name provided
     */
    getInputContent(inputId) {
        return document.getElementById(inputId).value;
    }

    // ###### END OF: GETTERS ######

    // ###### VALIDATIONS ######

    /** 
     * We validate the form and decide what to do, and 
     * manage the response
     */
    validateFullForm(form) {
        this.getFormValues(form);
        let isValidForm = this.isValidForm(form);
        this.checkIfMessageDisplayForm(isValidForm, form);
    }

    /**
     * This function will iterate from the FormModel that contains
     * the values and will validate each of the inputs, adding 
     * new error messages in case validation fails.
     */
    isValidForm(formValues) {

        for (const sectionId in formValues) {
            let section = formValues[sectionId];

            for (const inputId in section) {
                if (inputId === "title") continue;

                if (!this.isValidInput(formValues, sectionId, inputId)) {
                    document.getElementById(inputId).focus();
                    return false;
                }

            }
        }
        return true;
    }

    /**
     * We validate an input
     */
    validateInput(form, sectionId, inputId) {
        this.getInputValue(form, sectionId, inputId);
        let isValid = this.isValidInput(form, sectionId, inputId);
        this.checkIfMessageDisplayInput(isValid, form, inputId);
    }

    /**
     * We check if an individual input is valid
     */
    isValidInput(form, sectionId, inputId) {
        let input = this.getInput(form, sectionId, inputId);

        let inputValue = input["value"];

        // If the input is the password, we keep case, since we want to check
        // if a upper case is present.
        if (inputValue && inputId == "password") {

            input["valueValidation"] = input["value"];
        } else if (inputValue) {

            input["valueValidation"] = input["value"].toUpperCase();
        }

        return this.validationRules.validate(input);
    }

    // ###### END OF: VALIDATIONS ######

    // ###### MESSAGE DISPLAY ######

    /**
     * This function will iterate from the FormModel and will 
     * display all the error messages that the form values contain
     */
    displayValidationMessageInput(formValues) {

        for (const sectionId in formValues) {

            let section = formValues[sectionId];
            for (const inputId in section) {

                if (inputId === "title") continue;

                this.addErrorMessageToInputElement(section, inputId);
            }
        }

    }

    /**
     * This generate a new header for a section
     */
    addErrorMessageToInputElement(section, inputId) {
        // We take the validation element and the error messages 
        let inputValidationElement = this.getValidationElement(inputId);
        let errorMessages = section[inputId]["errorMessages"];

        let errorValidationResult = "";

        // We add the error messages that are provided
        errorMessages.forEach(error => {

            errorValidationResult += this.htmlGenerator.addNewErrorRow(error);
        });
        
        inputValidationElement.innerHTML = errorValidationResult;
    }

    /**
     * We print the form values in new table
     */
    printFormData(formValues) {
        this.openTableInformation();

        for (const sectionId in formValues) {

            let section = formValues[sectionId];
            for (const inputId in section) {
                if (inputId === "title") continue;

                this.writeNewTableRow(formValues, sectionId, inputId);
            }
        }
    }

    /**
     * This generate a new header for a section
     */
    openTableInformation() {
        let tableData = document.getElementById("mainTableData");
        tableData.innerHTML = this.htmlGenerator.openTableInformation("Input name", "Input value");
    }

    /**
     * This generate a new header for a section
     */
    writeNewTableRow(formValues, sectionId, inputId) {
        let tableDataContent = document.getElementById("tableDataContent");
        let newTableRow;

        let input = this.getInput(formValues, sectionId, inputId);
        let inputValue = input["value"];
        let labelName = input["labelName"];

        newTableRow = document.createElement("tr");
        newTableRow.innerHTML = this.htmlGenerator.generateTableRow(labelName, inputValue);

        tableDataContent.appendChild(newTableRow);
    }

    /**
     * When validating a formulary, we decide
     * if its valid we print a table with the data
     * if not, we display errors
     */
    checkIfMessageDisplayForm(isValidValue, form) {
        if (isValidValue) {
            this.printFormData(form);
        } else {
            this.displayValidationMessageInput(form);
        }
    }

    /**
     * When validating an input, we decide
     * if its valid we delete error messages
     * if not, we display errors
     */
    checkIfMessageDisplayInput(isValidValue, form, inputId) {
        if (isValidValue) {
            this.deleteErrorMessages(inputId);
        } else {
            this.displayValidationMessageInput(form);
        }
    }

    /**
     * We delete the error messages from an input
     */
    deleteErrorMessages(inputId) {
        this.getValidationElement(inputId).innerHTML = "";
    }

    // ###### END OF: MESSAGE DISPLAY ######

    // ###### EVENTS ######

    /**
     * Add the necessary events
     */
    prepareEvents(form) {
        // We listen to the validation button
        this.eventClickValidateForm(form);

        // We listen for the enter key
        this.eventEnterValidateForm(form);

        // We listen for the blur on an individual input
        this.eventBlurValidateInputs(form);
    }

    /**
     * We listen an event when click in the validate form
     */
    eventClickValidateForm(form) {
        document.getElementById("validateForm").addEventListener("click", () => {
            this.validateFullForm(form);
        })
    }

    /**
     * We listen an event when pressing enter key
     */
    eventEnterValidateForm(form) {
        document.addEventListener("keyup", (event) => {
            if (event.key == "Enter") {
                this.validateFullForm(form);
            }
        })
    }

    /**
     * We listen an event when changing the blur in an input that has validation
     */
    eventBlurValidateInput(form, sectionId, inputId) {

        document.getElementById(inputId).addEventListener("blur", () => {
            this.validateInput(form, sectionId, inputId);
        })
    }

    /**
     * Prepare all the inputs events for the blur event.
     */
    eventBlurValidateInputs(form) {
        for (const sectionId in form) {

            let section = form[sectionId];
            for (const inputId in section) {
                if (inputId === "title") continue;

                this.eventBlurValidateInput(form, sectionId, inputId)
            }
        }
    }

    // ###### END OF: EVENTS ######

}

