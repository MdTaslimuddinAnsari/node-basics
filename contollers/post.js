
const postData = require('../models/post');


exports.getPosts = async (req, res) => {
    try {
        const posts = await postData.find().select("_id title body");  // Wait for the posts to be fetched
        res.status(200).json({ posts: posts });  // Send the posts in the response
    } catch (err) {
        res.status(400).json({ error: err.message || 'An error occurred while retrieving posts' });
    }
};



exports.createPost = async (req, res) => {
    try {
        const newPost = new postData(req.body);

        const result = await newPost.save();
        res.status(201).json({
            post: result
        });
    } catch (err) {
        console.error("Error creating post:", err.message); 
        res.status(400).json({ error: err.message }); 
    }
};