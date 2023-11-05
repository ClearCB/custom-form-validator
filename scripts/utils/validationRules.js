import { Constants } from "./constants.js";


/**
 * In this class we store all the validation rules that we
 * want to apply.
 * 
 * To use and check information we use the constant class
 */
export class ValidationRules {
    constants = new Constants();



    /**
     * Check if the input is required
     */
    isRequired(inputId, constants) {

        return constants.REQUIRED_INPUTS.includes(inputId);
    }


    /**
     * Check if the value is filled and must be filled.
     */
    mustBeFilled(value, constants, errorName) {
        const errorMessage = constants.ERROR_MESSAGES[errorName];

        if (value == "" ||
            value == null ||
            value == undefined && constants.REQUIRED_INPUTS.includes(inputId)) {

            return errorMessage;
        }

    }


    /**
     * Check if an input is empty
     */
    isEmpty(value) {

        return value == "" ||
            value == null ||
            value == undefined
    }


    /**
     * Check if the gender provided is a valid one
     * 
     * Correct values: M / W
     */
    correctGender(value, constants, errorName) {
        const genders = constants.VALID_GENDERS;
        const errorMessage = constants.ERROR_MESSAGES[errorName];

        let isValidGender = genders.includes(value)

        if (!isValidGender) {
            return errorMessage;
        };


    }

    /**
     * Check if the language leve provided is a valid one
     * 
     * Correct values: A1, A2, B1, B2, C1, C2
     */
    correctLanguageLevel(value, constants, errorName) {
        const languageLevels = constants.LANGUAGE_LEVELS;
        const errorMessage = constants.ERROR_MESSAGES[errorName];

        let isValidLanguageLevel = languageLevels.includes(value)

        if (!isValidLanguageLevel) {
            return errorMessage;
        };


    }
    
    /**
     * Check if the addres provided is a correct one
     * 
     * Correct values: Country, city, street n-23 1-1
     */
    correctAddresFormat(value, constants, errorName) {
        const streetFormatRegex = constants.IS_CORRECT_STREET;
        const errorMessage = constants.ERROR_MESSAGES[errorName];

        let isValidStreetFormat = streetFormatRegex.test(value)

        if (!isValidStreetFormat) {
            return errorMessage;
        };


    }

    /**
     * Check if the card type is a valid one
     * 
     * Correct values: Visa / MasterCard
     */
    correctCardType(value, constants, errorName) {
        const correctCardTypes = constants.CARD_TYPE;
        const errorMessage = constants.ERROR_MESSAGES[errorName];

        let isValidCardType = correctCardTypes.includes(value)

        if (!isValidCardType) {
            return errorMessage;
        };

    }


    /**
     * Check if a credit card number is correct
     * 
     * Correct values format: 4111 1111 1111 1111 
     */
    correctCardNumber(value, constants, errorName) {
        const creditCardRegex = constants.IS_CREDIT_CARD_NUMBER;
        const errorMessage = constants.ERROR_MESSAGES[errorName];

        let isCorrectCreditCardNumber = creditCardRegex.test(value);

        if (!isCorrectCreditCardNumber) {
            return errorMessage;
        }

    }

    /**
     * Check if a cvc is correct
     * 
     * Correct values format: 111
     */
    isCorrectCvc(value, constants, errorName) {
        const regexCvc = constants.IS_CORRECT_CVC;
        const errorMessage = constants.ERROR_MESSAGES[errorName];

        let isCorrectCvc = regexCvc.test(value);

        if (!isCorrectCvc) {
            return errorMessage;
        }
    }

    /**
     * Check if a hexadeciaml color is correct format
     * 
     * Correct values format: #000 | #0000 | #000000 | #00000000
     */
    isCorrectHexColor(value, constants, errorName) {
        const regexHexColor = constants.IS_CORRECT_HEX_COLOR;
        const errorMessage = constants.ERROR_MESSAGES[errorName];

        let isCorrectHexColor = regexHexColor.test(value);

        if (!isCorrectHexColor) {
            return errorMessage;
        }
    }


    /**
     * Check if the twitter link provided is correct
     * 
     * Correct values format: https.//www.twitter.com/[]
     */
    isCorrectTwitterLink(value, constants, errorName) {
        const regexTwitterLink = constants.IS_CORRECT_TWITTER_LINK;
        const errorMessage = constants.ERROR_MESSAGES[errorName];

        let isCorrectTwitterLink = regexTwitterLink.test(value);

        if (!isCorrectTwitterLink) {
            return errorMessage;
        }
    }

    /**
     * Check if the facebook link provided is correct
     * 
     * Correct values format: https.//www.facebook.com/[]
     */
    isCorrectFacebookLink(value, constants, errorName) {
        const regexFacebookLink = constants.IS_CORRECT_FACEBOOK_LINK;
        const errorMessage = constants.ERROR_MESSAGES[errorName];

        let isCorrectFacebookLink = regexFacebookLink.test(value);

        if (!isCorrectFacebookLink) {
            return errorMessage;
        }
    }

    /**
     * Check if the expiration date is correct
     * 
     * Correct values format: 12/23
     */
    isCorrectExpirationDate(value, constants, errorName) {
        const regexExpirationDate = constants.IS_EXPIRATION_DATE;
        const errorMessage = constants.ERROR_MESSAGES[errorName];

        let isCorrectYear;
        let isCorrectExpirationDate = regexExpirationDate.test(value);

        // We get the actual date information
        const actualDate = new Date();
        let actualYear = actualDate.getFullYear().toString().split("").slice(-2).join("");
        let actualMonth = actualDate.getMonth() + 1;

        // We get the value date information
        let valueSplit = value.split("/");
        let valueYear = valueSplit[1];
        let valueMonth = valueSplit[0];

        if (isCorrectExpirationDate) {
            valueYear = parseInt(valueYear);
            valueMonth = parseInt(valueMonth);
            actualYear = parseInt(actualYear);

            isCorrectYear = actualYear < valueYear;
            let isCurrentYear = actualYear == valueYear;

            if (isCurrentYear) isCorrectYear = actualMonth <= valueMonth;
        }

        if (!isCorrectExpirationDate || !isCorrectYear) {
            return errorMessage;
        }
    }

    /**
     * Check if the email provided is correct 
     * 
     * Correct values format: example@sample.com
     */
    isCorrectEmail(value, constants, errorName) {
        const regexEmail = constants.IS_EMAIL;
        const errorMessage = constants.ERROR_MESSAGES[errorName];

        let isCorrectEmail = regexEmail.test(value);

        if (!isCorrectEmail) {
            return errorMessage;
        }
    }

    /**
     * Check if the value is a valid spanish DNI
     * 
     * Correct values format: 12121212G
     */
    isDni(value, constants, errorName) {
        const regexEmail = constants.IS_NIF;
        const errorMessage = constants.ERROR_MESSAGES[errorName];

        let isCorrectNif = regexEmail.test(value) // && letter !== expectedLetter;

        if (!isCorrectNif) {
            return errorMessage;
        }
    }

    /**
     * Check if the marital status is valid
     * 
     * Correct valid values: Just S, C, V or D
     */
    correctMaritalStatus(value, constants, errorName) {

        const maritalStatus = constants.MARITAL_STATUS;
        const errorMessage = constants.ERROR_MESSAGES[errorName];

        value = value.toUpperCase();

        let isValidMaritalStatus = maritalStatus.includes(value)

        if (!isValidMaritalStatus) {
            return errorMessage;
        };

    }

    /**
     * Check if a value is a positive integer
     * 
     * Correct valid: any number greater than 0
     */
    isPositiveInteger(value, constants, errorName) {
        const regexIsInteger = constants.IS_POSITIVE_INTEGER;
        const errorMessage = constants.ERROR_MESSAGES[errorName];

        let isDigitOnly = regexIsInteger.test(value);

        if (isDigitOnly) value = parseInt(value, 10);

        if (!Number.isInteger(value) || value < 0) {
            return errorMessage;
        }
    }

    /**
     * Check if a value is a correct password
     * 
     * Correct valid: anyword that has 8 length and just numbers and letters. One upper case, 
     * one lower case and number.
     */
    isCorrectPassword(value, constants, errorName) {
        const regexEmail = constants.IS_CORRECT_PASSWORD;
        const errorMessage = constants.ERROR_MESSAGES[errorName];

        let isAlphaNumeric = regexEmail.test(value);

        if (!isAlphaNumeric) {
            return errorMessage;
        }
    }

    /**
     * Check if the date provided is in the correct format
     * 
     * Correct format value: DD/MM/YYYY 
     */
    isValidDate(value, constants, errorName) {
        const regexEmail = constants.IS_VALID_DATE;
        const errorMessage = constants.ERROR_MESSAGES[errorName];

        let isCorrectDate = regexEmail.test(value);

        if (!isCorrectDate) {
            return errorMessage;
        }
    }

    /**
     * check if the date is previous from to day
     * 
     * Correct valid values: every date that is lower than today
     */
    isPreviousDate(value, constants, errorName) {
        const errorMessage = constants.ERROR_MESSAGES[errorName];

        const [day, month, year] = value.split("/");
        const specifiedDate = new Date(year, month - 1, day);
        const currentDate = new Date();

        if (specifiedDate > currentDate) {
            return errorMessage;
        }
    }

    // TODO , hour range and max 8 hour/day
    /**
     * Check if the work hours are lower than the actual legal one
     * 
     * Correct values: less or equal to 40
     */
    lessThanLegalWorkHours(value, constants, errorName) {
        const legalMaxHours = constants.LEGAL_MAX_WORK_HOURS
        const errorMessage = constants.ERROR_MESSAGES[errorName];

        if (value > legalMaxHours) {
            return errorMessage;
        }
    }

    /**
     * Check if the value of the phone number is correct
     * 
     * Correct values: +34 678 678 678
     */
    isPhoneNumber(value, constants, errorName) {
        const regexEmail = constants.IS_PHONE_NUMBER;
        const errorMessage = constants.ERROR_MESSAGES[errorName];

        let isCorrectPhoneNumber = regexEmail.test(value);

        if (!isCorrectPhoneNumber) {
            return errorMessage;
        }
    }

    /**
     * Validate the input using the custom validation rule
     */
    validate(input) {
        // Reset error messages
        input["errorMessages"] = [];

        // We take the information of the input
        let validationRules = input["validation"];
        let errorMessages = input["errorMessages"];
        let inputValue = input["valueValidation"];

        // For each validation rule, we check if the value is valid
        for (const validationRuleIndex in validationRules) {
            let rule = validationRules[validationRuleIndex];
            let result;

            // We execute the validation rule
            result = rule(inputValue, this.constants, rule.name);

            // If an error occurrs, we add a new error message
            if (rule.name == "isRequired") continue;
            if (result && (rule.name == "mustBeFilled" || !this.isEmpty(inputValue))) {

                errorMessages.push(result);
                return false;
            }
        }
        // Is valid
        return true;
    }
}