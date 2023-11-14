const User= require("../models/User"); 
const jwt = require("jsonwebtoken");
const uuid = require('uuid');

exports.signup = (req, res)=>{
    User.findOne({ email: req.body.email })
    .then(existingUser => { 
      if (existingUser) {
        return res.status(400).json({ message: "Email already exists" });
      }

      const { firstName, lastName, email, password } = req.body;
      const newUser = new User({
        firstName,
        lastName,
        email,
        password,
        username: `${firstName.toLowerCase()}_${lastName.toLowerCase()}_${uuid.v4()}`,
      });

      newUser.save()
        .then(data => {
          // User was successfully created
          res.status(201).json({ message: "User created successfully", data});
        })
        .catch(error => {
          // Handle any errors related to the save() operation
          res.status(400).json({ message: "Something went wrong", error });
        });
    })
    .catch(error => {
      // Handle any errors related to the findOne() operation
      res.status(500).json({ message: "Server error", error });
    });
}

exports.signin = (req, res) =>{ 
  User.findOne({email: req.body.email})
  .then(user => { 
    if (user) { 
      if(user.authenticate(req.body.password)){
        const token = jwt.sign({_id:user._id}, process.env.JWT_SECRET,{expiresIn:"1h"} );
        const { _id, firstName, lastName, email, role, fullName } = user;
        res.status(200).json({
          token,
          user:{
            _id, firstName, lastName, email, role, fullName
          }
        });
      }else{
        return res.status(400).json({ message: "Invalid Password" });
      }
    }else{
      return res.status(400).json({ message: "No user exists" });
    }
  })
  .catch(error => {
    // Handle any errors related to the findOne() operation 
    res.status(500).json({ message: "Server error", error: error.message });
  });
}

