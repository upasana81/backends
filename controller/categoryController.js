const Category = require('../models/categoryModel')

//add category
exports.addCategory = async (req, res) => {
   let category_exists = await Category.findOne({
      category_name: req.body.category_name

   })
   if(category_exists){
      return res.status(400).json({error: "Category already exists"})
   }


   let categoryToAdd = await Category.create({
      category_name: req.body.category_name
   })

   if (!categoryToAdd) {
      return res.status(400).json({ error: "Something went wrong" })
   }

   res.send(categoryToAdd)
}
exports.getAllCategories = async(req, res)=> {
   let categories = await Category.find()
   if(!categories){
      return res.status(400).json({"error":"Something went wrong"})
   }
   res.send(categories)
}
//get category details

exports.getCategoryDetails = async (req, res)=>{
   let category = await Category.findById
   (req.params.id)
   if(!category){
      return res.status(400).json
      ({error:"something went wrong"})
   }
   res.send(category)
}

// update category
exports.updateCategory = async (req, res)=>
{
   let categoryToUpdate = await Category.findByIdAndUpdate(req.params.id,{
      category_name: req.body.category_name
   },{new:true})
   if(!categoryToUpdate){
      return res.status(400).json({error:"Something went wrongf"})
   }
   res.send(categoryToUpdate)
}

//delete category
exports.deleteCategory =(req, res) =>{
   Category.findByIdAndDelete(req.params.id)
   .then(deletedCategory => {
      if(!deletedCategory){
         return res.status(400).json({error:"Category not found"})
      }
      res.send({message:"Category deleted sucessfully"})

   })
   .catch(error=>res.status(500).json({error:"something went wrong"}))
}


/* req.body->data is passed using from, body
req.params-> data is passed using the request url
req.query-> data is passed using url , in a variable  

res.status(200).send(object/string) 
res.status(400).json(object)

200 ]- ok (default)
300 - relay

error 
400 - bad request
401- unathorized 
403- permission denied
404- not found 
500- server error




CRUD -
create - Model.create(obj)

Read - Model.find() - returns all data
       Model.find(filterObj) - returns all data that matches filterObj
       Model.findOne(filterObj) - returns first data that matches filterObj
       Model.findById(id) - returns data that matches id

Update - Model.findByIdAndUpdate(id, updatingObj, option)
         id - what to update
         updatingObje -which fields to update, updating data
         option-...
        
      
 Delete - Model.findByIdAndDelete(id) - removes data with the given id       
*/