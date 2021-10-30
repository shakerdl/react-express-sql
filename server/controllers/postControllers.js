
const {Posts}  = require("../models/Posts");

exports.getAllPosts = async (req,res,next) => {
    res.send("Get All posts route");
};


exports.createNewPost = async (req,res,next) => {
    const user = req.body;
    const post = await Posts.create({user});
res.json(post);
};


exports.getPostById = async (req,res,next) => {
    res.send("Get Post By Id") ;

};



