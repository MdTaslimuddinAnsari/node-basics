const express = require('express')
const {getPosts, createPost} = require('../contollers/post');

const router = express.Router();
const validator = require('../validator')


router.get('/', getPosts);
router.post('/post', validator.createPostValidator, createPost);


module.exports = router;



// exports.getPosts =  (req,res) => {
//     // res.send("Hello World from node js");
// };

// module.exports = {
//     getPosts
// }