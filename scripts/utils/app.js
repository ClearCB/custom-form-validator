import { FormModel } from "../models/FormModel.js"
import { Functions } from "./functions.js";

export class App {
    form = new FormModel();
    functions = new Functions();

    start() {

        // We prepare the formulary html
        this.functions.prepareForm(this.form);

        // We add the necessary events
        this.functions.prepareEvents(this.form);
    }

} 