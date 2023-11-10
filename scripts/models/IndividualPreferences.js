import { ValidationRules } from "../utils/validationRules.js";
import { InputModel } from "./InputModel.js";
let rules = new ValidationRules();

export class IndividualPreferences{
    title = "Individual preferences";
    color = new InputModel("","","Favourite color", [rules.isCorrectHexColor], []);
    facebook = new InputModel("","","Facebook link", [rules.isCorrectFacebookLink], []);
    twitter = new InputModel("","","Twitter link", [rules.isCorrectTwitterLink], []);
    generalComments = new InputModel("","","General comments", [], []);
}