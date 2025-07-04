import fs from "fs";
import imagekit from "../configs/imageKit.js";
import { Blog } from "../models/BlogModel.js";
import { Comment } from "../models/commentModel.js";
import main from "../configs/gemini.js";

export const addBlog = async (req, res) => {
  try {
    const { title, subTitle, description, category, isPublished } = JSON.parse(
      req.body.blog
    );
    const imageFile = req.file;

    if (!title || !subTitle || !description || !category || !imageFile) {
      return res.json({ success: false, message: "Missing Required fields" });
    }

    const fileBuffer = fs.readFileSync(imageFile.path);
    // imageupload on imagekit
    const response = await imagekit.upload({
      file: fileBuffer,
      fileName: imageFile.originalname,
      folder: "/blogs",
    });

    // optimization of image through imagekit

    // For URL Generation, works for both images and videos
    const OptimizedImageURL = imagekit.url({
      path: response.filePath,
      transformation: [
        { quality: "auto" },
        { format: "webp" },
        { width: "1280" },
      ],
    });


    const image = OptimizedImageURL;

    const newBlog= await Blog.create({
      title,
      subTitle,
      description,
      category,
      image,
      isPublished,
    });

    console.log("New Blog", newBlog);

    res.json({ success: true, message: "Blog Added Successfully" });
  } catch (error) {
    res.json({ success: false, message: error });
  }
};

export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({ isPublished: true });
    res.json({ success: true, blogs });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const getBlogsById = async (req, res) => {
  try {
    const { blogId } = req.params;
    const blog = await Blog.findById(blogId);
    if (!blog) {
      return res.json({ success: false, message: "Blog not found" });
    }
    res.json({ success: true, blog });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const deleteBlogById = async (req, res) => {
  try {
    const { id } = req.body;
    await Blog.findByIdAndDelete(id);

    // Delete all comments associated with the blog
    await Comment.deleteMany({ blog: id });

    res.json({ success: true, message: "Deleted Successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const togglePublish = async (req, res) => {
  try {
    const { id } = req.body;
    const blog = await Blog.findById(id);
    blog.isPublished = !blog.isPublished;
    await blog.save();
    res.json({ success: true, message: "Blog status updated successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const addComment = async (req, res) => {
  try {
    const { blog, name, content } = req.body;
    await Comment.create({ blog, name, content });
    res.json({ success: true, message: "Comment Added for Approval" });
  } catch (error) {
    res.json({ sucess: false, message: error.message });
  }
};

export const getBlogComments = async (req, res) => {
  try {
    const { blogId } = req.body;
    const comments = await Comment.find({
      blog: blogId,
      isApproved: true,
    }).sort({ createdAt: -1 });
    console.log(comments)
    res.json({ success: true, comments });
  } catch (error) {
    res.json({success:false,message:error.message})
  }
};

export const generateContent=async(req,res)=>{
  try {
      const {prompt} = req.body;
      const content= await main(prompt + ' Generate a blog content for this topic in simple text format and with excellent SEO')
      res.json({success:true, content,})
    } catch (error) {
      res.json({success:false,message:error.message})
  }
}
