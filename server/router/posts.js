import express from 'express';
import {getPosts, createPost, updatePost, deletePost, getPost} from '../controllers/posts.js';
const router = express.Router();

router.get('/', getPosts);
router.post('/create', createPost);
router.post('/update', updatePost);

router.post('/delete/:id', deletePost);
router.post('/post/:id', getPost);

export default router;