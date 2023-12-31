import { Constants } from "./constants.js";

/**
 * In this class we store all the validation rules that we
 * want to apply.
 * 
 * To use and check information we use the constant class
 */
export class ValidationRules {
    /**
     * Check if the value is filled and must be filled.
     */
    mustBeFilled(value, errorName, inputId) {
        const errorMessage = Constants.ERROR_MESSAGES[errorName];

        if ((value == "" ||
            value == null ||
            value == undefined) && Constants.REQUIRED_INPUTS.includes(inputId)) {

            return errorMessage;
        }

    }


    /**
     * Check if an input is empty
     */
    isFilled(value) {

        return !(value == "" ||
            value == null ||
            value == undefined);
    }


    /**
     * Check if the gender provided is a valid one
     * 
     * Correct values: M / W
     */
    correctGender(value, errorName, inputId) {
        const genders = Constants.VALID_GENDERS;
        const errorMessage = Constants.ERROR_MESSAGES[errorName];

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
    correctLanguageLevel(value, errorName, inputId) {
        const languageLevels = Constants.LANGUAGE_LEVELS;
        const errorMessage = Constants.ERROR_MESSAGES[errorName];

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
    correctAddresFormat(value, errorName, inputId) {
        const streetFormatRegex = Constants.IS_CORRECT_STREET;
        const errorMessage = Constants.ERROR_MESSAGES[errorName];

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
    correctCardType(value, errorName, inputId) {
        const correctCardTypes = Constants.CARD_TYPE;
        const errorMessage = Constants.ERROR_MESSAGES[errorName];

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
    correctCardNumber(value, errorName, inputId) {
        const creditCardRegex = Constants.IS_CREDIT_CARD_NUMBER;
        const errorMessage = Constants.ERROR_MESSAGES[errorName];

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
    isCorrectCvc(value, errorName, inputId) {
        const regexCvc = Constants.IS_CORRECT_CVC;
        const errorMessage = Constants.ERROR_MESSAGES[errorName];

        let isCorrectCvc = regexCvc.test(value);

        if (!isCorrectCvc) {
            return errorMessage;
        }
    }

    /**
     * Check if a cp is correct
     * 
     * Correct values format: 111
     */
    isCorrectCp(value, errorName, inputId) {
        const regexCvc = Constants.IS_CORRECT_CP;
        const errorMessage = Constants.ERROR_MESSAGES[errorName];

        let isCorrectCp = regexCvc.test(value);

        if (!isCorrectCp) {
            return errorMessage;
        }
    }

    /**
     * Check if a hexadeciaml color is correct format
     * 
     * Correct values format: #000 | #0000 | #000000 | #00000000
     */
    isCorrectHexColor(value, errorName, inputId) {
        const regexHexColor = Constants.IS_CORRECT_HEX_COLOR;
        const errorMessage = Constants.ERROR_MESSAGES[errorName];

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
    isCorrectTwitterLink(value, errorName, inputId) {
        const regexTwitterLink = Constants.IS_CORRECT_TWITTER_LINK;
        const errorMessage = Constants.ERROR_MESSAGES[errorName];

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
    isCorrectFacebookLink(value, errorName, inputId) {
        const regexFacebookLink = Constants.IS_CORRECT_FACEBOOK_LINK;
        const errorMessage = Constants.ERROR_MESSAGES[errorName];

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
    isCorrectExpirationDate(value, errorName, inputId) {
        const regexExpirationDate = Constants.IS_EXPIRATION_DATE;
        const errorMessage = Constants.ERROR_MESSAGES[errorName];

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
    isCorrectEmail(value, errorName, inputId) {
        const regexEmail = Constants.IS_EMAIL;
        const errorMessage = Constants.ERROR_MESSAGES[errorName];

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
    isDni(value, errorName, inputId) {
        const regexEmail = Constants.IS_NIF;
        const tableLetters = Constants.TABLE_LETTERS[0].split("");
        const errorMessage = Constants.ERROR_MESSAGES[errorName];

        let isCorrectDni = regexEmail.test(value);

        if (isCorrectDni) {
            // Split the value
            let valueSplitted = value.split("");

            // Get the letter and the number
            let dniLetter = valueSplitted.at(-1);
            let dniNumber = value.slice(0, valueSplitted.length);

            // Calculate the position of the correct letter
            dniNumber = parseInt(dniNumber) % tableLetters.length;

            // Check if the letter is equal to the correct one
            let correctLetter = tableLetters[dniNumber];
            isCorrectDni = dniLetter.toUpperCase() == correctLetter.toUpperCase();

        }

        if (!isCorrectDni) {
            return errorMessage;
        }
    }

    /**
     * Check if the marital status is valid
     * 
     * Correct valid values: Just S, C, V or D
     */
    correctMaritalStatus(value, errorName, inputId) {

        const maritalStatus = Constants.MARITAL_STATUS;
        const errorMessage = Constants.ERROR_MESSAGES[errorName];

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
    isPositiveInteger(value, errorName, inputId) {
        const regexIsInteger = Constants.IS_POSITIVE_INTEGER;
        const errorMessage = Constants.ERROR_MESSAGES[errorName];

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
    isCorrectPassword(value, errorName, inputId) {
        const regexEmail = Constants.IS_CORRECT_PASSWORD;
        const errorMessage = Constants.ERROR_MESSAGES[errorName];

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
    isValidDate(value, errorName, inputId) {
        const regexEmail = Constants.IS_VALID_DATE;
        const errorMessage = Constants.ERROR_MESSAGES[errorName];

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
    isPreviousDate(value, errorName, inputId) {
        const errorMessage = Constants.ERROR_MESSAGES[errorName];

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
    lessThanLegalWorkHours(value, errorName, inputId) {
        const legalMaxHours = Constants.LEGAL_MAX_WORK_HOURS
        const errorMessage = Constants.ERROR_MESSAGES[errorName];

        if (value > legalMaxHours) {
            return errorMessage;
        }
    }

    /**
     * Check if the value of the phone number is correct
     * 
     * Correct values: +34 678 678 678
     */
    isPhoneNumber(value, errorName, inputId) {
        const regexEmail = Constants.IS_PHONE_NUMBER;
        const errorMessage = Constants.ERROR_MESSAGES[errorName];

        let isCorrectPhoneNumber = regexEmail.test(value);

        if (!isCorrectPhoneNumber) {
            return errorMessage;
        }
    }

    /**
     * Validate the input using the custom validation rule
     */
    validate(input, inputId) {
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
            result = rule(inputValue, rule.name, inputId);

            if (result && (rule.name == "mustBeFilled" || this.isFilled(inputValue))) {

                errorMessages.push(result);
                return false;
            }
        }
        // Is valid
        return true;
    }
}