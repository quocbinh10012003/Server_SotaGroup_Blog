import { PostModel } from "../models/PostModel.js";

export const getPosts = async (req, res) =>{
    try {
        // const post = new PostModel({
        //     title: 'test',
        //     content: 'test',
        // });
        // post.save();

        const posts = await PostModel.find();
        // console.log('lay dc posts', posts);
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json({error:err});
    }
};
export const getPost = async (req, res) =>{
    try {
        const posts = await PostModel.findById(req.params.id);
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json({error:err});
    }
};
export const createPost = async (req, res) => {
    try {
        const newPost = req.body;
        // console.log(newPost);
        const post = new PostModel(newPost);
        await post.save();
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json({error:err});
    }
}
export const updatePost = async (req, res) => {
    try {
        const updatePost = req.body;
        const post = await PostModel.findOneAndUpdate({ _id: updatePost._id}, updatePost, {new :true});
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json({error:err});
    }
}
export const deletePost = async (req, res) => {
    try {
        console.log(req);
        const deletePostId = req.params.id;
        console.log('deletePostId:', deletePostId); 
        const deletedPost = await PostModel.findByIdAndDelete(deletePostId);

        if (!deletedPost) {
            return res.status(404).json({ error: 'Bài viết không tồn tại' });
        }

        res.status(200).json({ message: 'Bài viết đã bị xóa thành công', deletedPost });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Đã có lỗi xảy ra khi xóa bài viết' });
    }
}