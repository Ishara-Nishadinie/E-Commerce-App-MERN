const express = require("express");
const env = require("dotenv");
const mongoose = require('mongoose');
//const bodyParser = require('body-parser');
const app= express();

//routes
const authRoutes = require("./routes/auth")
const adminRoutes = require("./routes/admin/auth")
const categoryRoutes = require("./routes/categories")


env.config();



mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.asafoxo.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`
    ).then(()=>{
        console.log("Database Connected")
})

app.use(express.json());
app.use("/api", authRoutes);
app.use("/api", adminRoutes);
app.use("/api", categoryRoutes);

// Example POST request handling
// app.post('/api/data', (req, res) => {
//   // Access the parsed JSON data from the request body
//   const jsonData = req.body;
//   // Process the JSON data as needed
//   res.json({ message: 'Data received', data: jsonData });
// });

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})