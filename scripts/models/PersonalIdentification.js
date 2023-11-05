import { ValidationRules } from "../utils/validationRules.js";
import { InputModel } from "./InputModel.js";
let rules = new ValidationRules();


export class PersonalIdentification {
    title = "Personal identification";
    name = new InputModel("","","Name", [rules.mustBeFilled, rules.isRequired], []);
    firstSurname = new InputModel("","","First surname", [rules.mustBeFilled, rules.isRequired], []);
    secondSurname = new InputModel("","","Second surname", [], []);
    gender = new InputModel("","","Man / Woman", [rules.mustBeFilled, rules.isRequired, rules.correctGender], []);
    postalAddress = new InputModel("","","Postal address", [rules.correctAddresFormat], []);
    cp = new InputModel("","","CP", [], []);
    dni = new InputModel("","","DNI", [rules.mustBeFilled, rules.isRequired, rules.isDni], []);
    email = new InputModel("","","E-mail", [rules.mustBeFilled, rules.isRequired, rules.isCorrectEmail], []);
    mobile = new InputModel("","","Mobile", [rules.mustBeFilled, rules.isRequired, rules.isPhoneNumber], []);
    birthdate = new InputModel("","","Birthday", [rules.isValidDate], []);
    placeBirth = new InputModel("","","Place of birth", [], []);
    maritalStatus = new InputModel("","","Marital status", [rules.mustBeFilled, rules.isRequired, rules.correctMaritalStatus], []);


}