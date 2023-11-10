import { CorporativeIdentification } from "../models/CorporativeIdentification.js";
import { Education } from "../models/Education.js";
import { IndividualPreferences } from "../models/IndividualPreferences.js";
import { Languages } from "../models/Languages.js";
import { PaymentMethod } from "../models/PaymentMethod.js";
import { PersonalIdentification } from "../models/PersonalIdentification.js"

export class FormModel {
    constructor() {
        this.personal = new PersonalIdentification();
        this.corporative =  new CorporativeIdentification();
        this.education =new Education();
        this.languages = new Languages();
        this.payment = new PaymentMethod();
        this.individual =  new IndividualPreferences();
    }
}