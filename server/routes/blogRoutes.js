import {Router} from 'express'
import { addBlog, addComment, deleteBlogById, generateContent, getAllBlogs, getBlogComments, getBlogsById, togglePublish } from '../controllers/blogController.js';
import upload from '../middlewares/multer.js';
import auth from '../middlewares/authMiddleware.js';

const blogRouter= Router();

blogRouter.post('/add',auth,upload.single('image'),addBlog);
blogRouter.get('/all',getAllBlogs);
blogRouter.get('/:blogId',getBlogsById);
blogRouter.post('/delete',auth,deleteBlogById);
blogRouter.post('/toggle-publish',auth,togglePublish);

blogRouter.post('/add-comment',addComment)
blogRouter.post('/comments',getBlogComments)

// gemini content generate

blogRouter.post('/generate',auth,generateContent)

export default blogRouter;