import { ValidationRules } from "../utils/validationRules.js";
import { InputModel } from "./InputModel.js";
let rules = new ValidationRules();


export class PaymentMethod{
    title = "Payment method";
    cardType = new InputModel("","","Card type", [rules.correctCardType], []);
    cardNumber = new InputModel("","","Card number", [rules.correctCardNumber], []);
    cvc = new InputModel("","","CVC", [rules.isCorrectCvc], []);
    expirationCardDate = new InputModel("","","Expiration date", [rules.isCorrectExpirationDate], []);

}