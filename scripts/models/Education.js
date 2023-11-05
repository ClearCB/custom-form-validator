import { ValidationRules } from "../utils/validationRules.js";
import { InputModel } from "./InputModel.js";
let rules = new ValidationRules();


export class Education{
    title = "Education";
    educationLevel = new InputModel("","","Education level", [rules.mustBeFilled, rules.isRequired], []);

}