import { body } from "express-validator";

export const categoryValidation=[

body("name")

.notEmpty()

.withMessage(

"Category name required"

)

];