/**
 * 
 * In this class we store all the constants, regex or custom messages
 * that we use in this application.
 */
export class Constants {
    REQUIRED_INPUTS = [
        "name", "firstSurname", "gender",
        "dni", "email", "mobile",
        "maritalStatus", "employeeNumber",
        "user", "department", "startDate",
        "educationLevel", "english", "spanish", "german"];

    VALID_GENDERS = ["M", "W", "O"];
    MARITAL_STATUS = ["S", "C", "V", "D"];
    LANGUAGE_LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];
    CARD_TYPE = ["VISA", "MASTERCARD"];
    LEGAL_MAX_WORK_HOURS = 40;

    IS_EMAIL = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    IS_PHONE_NUMBER = /^(?:(?:(?:\+|00)(34))?)?[6789]\d{8}$/;
    IS_VALID_DATE = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    IS_CORRECT_PASSWORD = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    IS_NIF = /^\d{8}[A-HJ-NP-TV-Z]$/;
    IS_HOUR_FORMAT = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
    IS_POSITIVE_INTEGER = /^\d+$/;
    IS_CREDIT_CARD_NUMBER = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14})$/;
    IS_CORRECT_CVC = /\b\d{3,4}\b/;
    IS_EXPIRATION_DATE = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;
    IS_CORRECT_HEX_COLOR = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/;
    IS_CORRECT_TWITTER_LINK = /(https?:\/\/)?(www\.)?twitter\.com\/\w+/;
    IS_CORRECT_FACEBOOK_LINK = /(https?:\/\/)?(www\.)?facebook\.com\/[-.\w]+/;
    IS_CORRECT_STREET = /^[A-Za-z\s]+, [A-Za-z\s]+, [A-Za-z\s0-9]+ n-\d{1,5}(?: [A-Za-z]|[1-9][A-Z])? \d{1,5}[-\dA-Za-z]{1,5}$/i;

    ERROR_MESSAGES = {
        "correctGender": "Just W,M or O please",
        "mustBeFilled": "Fill this information please!",
        "isCorrectEmail": "Write a valid email please!",
        "isPhoneNumber": "Write a valid spanish phone number please!",
        "isValidDate": "Write a valid date format (dd/mm/yyyy)!",
        "isPreviousDate": "Add a date that is previous than today!",
        "lessThanLegalWorkHours": "Maximum 40h/week!",
        "isCorrectPassword": "Write a valid password length of 8 One letter upper case, one letter lower case and a number!",
        "isDni": "Write a valid spanish DNI!",
        "correctMaritalStatus": "Just S, C, V or D!",
        "isPositiveInteger": "Write a correct employee number. Positive integer!",
        "correctLanguageLevel": "Just  A1, A2, B1, B2, C1, C2!",
        "correctCardType": "Just Visa or MasterCard!",
        "correctCardNumber": "Write a correct credit card number. EEEE-EEEE-EEEE-EEEE!",
        "isCorrectCvc": "Write a correct CVC. NNN!",
        "isCorrectExpirationDate": "Write a correct expiration date. MM/YY !",
        "isCorrectHexColor": "Write a correct hexadecimal color #000 | #0000 | #000000 | #00000000 !",
        "isCorrectTwitterLink": "Write a correct twitter link",
        "isCorrectFacebookLink": "Write a correct facebook link!",
        "correctAddresFormat": "Write a correct addres format!",
    }

    ADDITIONAL_INFORMATION_INPUT_RULE = {
        "isRequired": ["  (*) "],
        "isCorrectEmail": [" (email@example.com)"],
        "correctLanguageLevel": [" A1, A2, B1, B2, C1, C2"],
    }

    ADDITIONAL_INFORMATION_INPUT_TYPE = {

        "mobile": [" Example: +34 123 456 789"],
        "password": [" Min-length: 8", " Values: 1-9 a-z A-Z"],
        "cardType": [" (Visa/MasterCard)"],
        "gender": [" (M/W)"],
        "maritalStatus": [" (S/C/V/D)"],
        "color": [" (HEX-#000000)"],
        "cv": [" (file-attach)"],
        "birthdate": [" (dd/mm/yyyy)"],
        "startDate": [" (dd/mm/yyyy)"],
        "expirationCardDate": [" (mm/yy)"], 
        "postalAddress": [" Example: Spain, Palma, Calle Joan Alcover n-23 1-A"],
    }



}