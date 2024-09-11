# Custom validator form vanilla javascript

In this repository you will find a vanilla javascript form validator. It was developed to acomplish a simple requirement to a class project.

## Parts

* Custom validation rules: the functions that will validate the values
* Models: the models that will create the form structure
* Functions: the functions that create the form
* Constants: all the information needed related to the validation rules

## Description

First we have a main model which is the [form model](./scripts/models/FormModel.js) that will contain all the object that we call _form sections_. Each object of this __form model__ has it own objects that are [input models](./scripts/models/InputModel.js).

Each __section__ has 2 parts:

* Title: that is the name of the section that will create a heading of level 1
* Inputs: that is each input that we want to validate

Each __input model__ has 5 parts:

* __Value__: that is the real value of the input
* __Value validation__: that is the value that we will use to check our validation rules
* __Label name__: that is the name that will be displayed at the input label in the html
* __Validation__: here we will store all the functions that we want to be executed in each individual input
* __Error messages__: here we will store the error messages that our _constants_ script will serve for each input

__IMPORTANT!__ the only file that will display information, is the [form model](./scripts/models/FormModel.js), and each section has it own objet. So if you want to make it work, just create a new object with their new inputs and it should appear new inputs rows.

## Constants

At the constants file we have two differents parts:

* Global information: the global information is something we want to store and be accesible from everywhere.
* Data that will be used for the form "creator" to interact with the inputs to: add additional information, display error messages...

In this second part we have:

* __ERROR_MESSAGES__ constant: this needs to have as a key a valid rule that will be found at the [validation rules](./scripts/utils/validationRules.js)  file, and as a value the message you want to be displayed.
* __ADDITIONAL_INFORMATION_INPUT_RULE__ constant: this information is going to be added at the right of the label, to give the user more information like _(*)_ to mark an input as a required, this information is related to the custom validation rules, so they key must be a valid custom validation rule and the value the message.

* __ADDITIONAL_INFORMATION_INPUT_TYPE__ constant: this information is going to be added at the right of the label, to give the user more information like _(dd/mm/yyyy)_ to mark the valid format of an input, this information is related to the name of the input, so they key must be a valid object atribute from one of the sections of the form and the value the message.

* At the constants file we can find arrays with the values that an input should get, for example:

```javascript
LANGUAGE_LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];
```

* We can find also regex expressions that can be access from everywhere like:

```javascript
IS_EMAIL = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;    
```

## Use

Now that you understand it, it's time to use it
First install packages:

```bash
npm install
```

When you already have the packages installed, create a new script with the name you want. Then inside this new model section, add two properties to look like this

```javascript
import { ValidationRules } from "../utils/validationRules.js";
import { InputModel } from "./InputModel.js";
let rules = new ValidationRules();


export class YourModel {
    title = "Your model";
    name = new InputModel("","","Name", [rules.mustBeFilled, rules.isRequired], []);
}
```

The first 2 params are free to get a value if you want something to have a default value.

At the 4th param you can add the custom rules. Remember that if you want a custom message that will be displayed if a validation is false, you must add a new property to the constant __ERROR_MESSAGES__

 Go to [form model](./scripts/models/FormModel.js) and add a new property that will be this new object you have just created. Now you should have the new input sections in your form.

## Improvements

If you saw something that is not correct or a better way to make it do not doubt in contact me.

It would be great to split the functions and validationRules script in different ones in which we will find all the related functions so it is easier to scale. Since it was just a small example, I made it in the same script.

TODO: convert the models in generic information.
