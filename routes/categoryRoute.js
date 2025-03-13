const express = require('express')
const { addCategory, getAllCategories, getCategoryDetails, updateCategory, deleteCategory } = require('../controller/categoryController')
const { categoryRules, validationMethod } = require('../middleware/validationScript')
const router = express.Router()

router.post('/addcategory', categoryRules,validationMethod, addCategory)
router.get('/getAllCategories',getAllCategories)
router.get('/getCategoryDetails/:id',getCategoryDetails)
router.put('/updatecategory/:id', updateCategory)
router.delete('/deletecategory/:id', deleteCategory)

module.exports = router