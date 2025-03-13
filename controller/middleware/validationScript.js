const { check, validationResult } = require('express-validator')

// exports.userRegisterRules = [
//     check('username', "Username is required")
//         .isLength({ min: 3 }).withMessage("Username must be at least 3 characters")
//         .not().isIn(['admin', 'test', 'dog', 'god', 'password']).withMessage("Username not allowed"),
//     check('email', "email is required").notEmpty()
//         .isEmail().withMessage("Email format incorrect"),
//     check('password', "Password is required").notEmpty()
//         .matches(/[a-z]/).withMessage("Password must contain at least 1 lowercase alphabet")
//         .matches(/[A-Z]/).withMessage("Password must contain at least 1 uppercase alphabet")
//         .matches(/[0-9]/).withMessage("Password must contain at least 1 number")
//         .matches(/[!@#$%_.-]/).withMessage("Password must contain at least 1 special")
//         .isLength({ min: 8 }).withMessage("Password must be at least 8 characters")
//         .isLength({ max: 20 }).withMessage("Password must not exceed 20 characters")
// ]

exports.validationMethod = (req, res, next) => {
    let errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array()[0].msg })
    }
    next()
}


exports.categoryRules = [
    check('category_name',"Category name is required").notEmpty()
    .isLength({min:3}).withMessage("Category must be at least 3 characters")
]

