
const { users } = require("../models");

exports.getAllPosts = async (req,res,next) => {
    const listOfUsers = await users.findAll();
    res.json(listOfUsers);
};


exports.createNewPost = async (req,res,next) => {
  
        const post = req.body;
        await users.create(post);
        res.json(post);

};


exports.getPostById = async (req,res,next) => {
    res.send("Get Post By Id") ;

};



