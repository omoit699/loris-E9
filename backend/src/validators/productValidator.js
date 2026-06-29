import { body } from "express-validator";

export const productValidation=[

body("name")

.notEmpty()

.withMessage("Name required"),

body("description")

.notEmpty()

.withMessage("Description required"),

body("price")

.isFloat({

min:0

})

.withMessage("Invalid price"),

body("quantity")

.isInt({

min:0

})

.withMessage("Invalid quantity")

];