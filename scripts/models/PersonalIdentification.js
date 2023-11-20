import { ValidationRules } from "../utils/validationRules.js";
import { InputModel } from "./InputModel.js";
let rules = new ValidationRules();

export class PersonalIdentification {
    title = "Personal identification";
    name = new InputModel("", "", "Name", [rules.mustBeFilled], []);
    firstSurname = new InputModel("", "", "First surname", [rules.mustBeFilled], []);
    secondSurname = new InputModel("", "", "Second surname", [], []);
    gender = new InputModel("", "", "Man / Woman", [rules.mustBeFilled, rules.correctGender], []);
    postalAddress = new InputModel("", "", "Postal address", [rules.correctAddresFormat], []);
    cp = new InputModel("", "", "CP", [rules.mustBeFilled, rules.isCorrectCp], []);
    dni = new InputModel("", "", "DNI", [rules.mustBeFilled, rules.isDni], []);
    email = new InputModel("", "", "E-mail", [rules.mustBeFilled, rules.isCorrectEmail], []);
    mobile = new InputModel("", "", "Mobile", [rules.mustBeFilled, rules.isPhoneNumber], []);
    birthdate = new InputModel("", "", "Birthday", [rules.isValidDate, rules.isPreviousDate], []);
    placeBirth = new InputModel("", "", "Place of birth", [], []);
    maritalStatus = new InputModel("", "", "Marital status", [rules.mustBeFilled, rules.correctMaritalStatus], []);
}