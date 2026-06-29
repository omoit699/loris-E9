import { body } from "express-validator";

export const registerValidation=[

body("firstName")

.notEmpty()

.withMessage("First name required"),

body("lastName")

.notEmpty()

.withMessage("Last name required"),

body("email")

.isEmail()

.normalizeEmail(),

body("phone")

.notEmpty(),

body("password")

.isLength({

min:8

})

.withMessage(

"Password must be at least 8 characters"

)

];