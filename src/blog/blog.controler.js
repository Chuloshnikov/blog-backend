import { Router } from "express";
import { BlogService } from "./blog.service.js";

//Здесь и обрабатываем всю валидацию

const router = Router();

const blogsService = new BlogService();

router.post('/', (req, res) => {
    const blog = blogsService.createBlog(req.body);
    res.status(201).json(blog);
});

export const blogRouter = router