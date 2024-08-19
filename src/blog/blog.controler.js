import { Router } from "express";
import { BlogService } from "./blog.service.js";

//Здесь и обрабатываем всю валидацию

const router = Router();

const blogsService = new BlogService();

router.post('/', (req, res) => {
    if (!req.body?.text?.length) {
        return res.status(400).json({ message: "Text is required"})
    }
    const blog = blogsService.createBlog(req.body);
    res.status(201).json(blog);
});

export const blogRouter = router