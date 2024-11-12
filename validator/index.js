// Import the necessary functions from express-validator
const { check, validationResult } = require('express-validator');

// Define the createPostValidator middleware
exports.createPostValidator = [
    check('title').notEmpty().withMessage("Title cannot be empty")
        .isLength({ min: 4, max: 150 }).withMessage("Title must be between 4 to 150 characters"),
    check('body').notEmpty().withMessage("Body cannot be empty")
        .isLength({ min: 4, max: 2000 }).withMessage("Body must be between 4 to 2000 characters"),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: errors.array()[0].msg });
        }
        next();
    }
];
