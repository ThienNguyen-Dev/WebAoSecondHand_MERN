const Category = require('../models/categoryModel')

const categoryCtrl = {
    getCategories: async(req,res)=>{
        try {
            const category = await Category.find()
            res.json(category)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}

module.exports=categoryCtrl