import { ValidationRules } from "../utils/validationRules.js";
import { InputModel } from "./InputModel.js";
let rules = new ValidationRules();

export class Languages{
    title = "Languages";
    english = new InputModel("","","English", [rules.mustBeFilled, rules.correctLanguageLevel], []);
    spanish = new InputModel("","","Spanish", [rules.correctLanguageLevel], []);
    german = new InputModel("","","German", [rules.correctLanguageLevel], []);
}