import { ValidationRules } from "../utils/validationRules.js";
import { InputModel } from "./InputModel.js";
let rules = new ValidationRules();

export class CorporativeIdentification {
    title = "Corporative identification";
    employeeNumber = new InputModel("","","Employee number", [rules.mustBeFilled, rules.isPositiveInteger], []);
    user = new InputModel("","","User", [rules.mustBeFilled], []);
    password = new InputModel("","","Password", [rules.isCorrectPassword], []);
    department = new InputModel("","","Department", [rules.mustBeFilled], []);
    startDate = new InputModel("","","Start working date", [rules.mustBeFilled, rules.isValidDate, rules.isPreviousDate], []);
    workHours = new InputModel("","","Total work hours per week", [rules.isPositiveInteger, rules.lessThanLegalWorkHours], []);
}