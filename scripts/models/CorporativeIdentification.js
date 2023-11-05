import { ValidationRules } from "../utils/validationRules.js";
import { InputModel } from "./InputModel.js";
let rules = new ValidationRules();

export class CorporativeIdentification {
    title = "Corporative identification";
    employeeNumber = new InputModel("","","Employee number", [rules.mustBeFilled, rules.isRequired, rules.isPositiveInteger], []);
    user = new InputModel("","","User", [rules.mustBeFilled, rules.isRequired], []);
    password = new InputModel("","","Password", [rules.isCorrectPassword], []);
    department = new InputModel("","","Department", [rules.mustBeFilled, rules.isRequired], []);
    startDate = new InputModel("","","Start working date", [rules.mustBeFilled, rules.isRequired, rules.isValidDate, rules.isPreviousDate], []);
    workHours = new InputModel("","","Total work hours per week", [rules.isPositiveInteger, rules.lessThanLegalWorkHours], []);
}