const { default: slugify } = require("slugify");
const Category = require("../models/Category");

function createList(categories, parentId=null){
    const catList=[];
    let category;
    if(parentId==null){
        category= categories.filter(cat=>cat.parentId==undefined);
    }else{
        category = categories.filter(cat=>cat.parentId==parentId);
    }

    for (let cat of category){
        catList.push({
            _id:cat.id,
            name:cat.name,
            slug:cat.slug,
            children:createList(categories, cat._id)
        })
    }
    return catList;
}
exports.addCategory= (req, res)=>{
    const newcat = new Category({
        name:req.body.name,
        slug: slugify(req.body.name)
    })

    if(req.body.parentId){
        newcat.parentId = req.body.parentId;
    }
    newcat.save()
    .then(data => {
        // User was successfully created
        res.status(201).json({ message: "Category created successfully", data});
      })
      .catch(error => {
        // Handle any errors related to the save() operation
        res.status(400).json({ message: "Something went wrong", error });
      });
}

exports.getCategory = (req,res)=>{
    Category.find({})
    .then(categories => {   
        const categoryList = createList(categories);
        return res.status(200).json(categoryList);
    })
    .catch(error => {
        // Handle any errors related to the find() operation
        console.error("Error occurred while fetching categories:", error);
        res.status(500).json({ message: "Server error", error });
      });

    }