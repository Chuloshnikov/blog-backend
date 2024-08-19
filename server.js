import express from 'express';
import { blogRouter } from './src/blog/blog.controler.js';

const app = express();

async function main() {
    app.use(express.json());

    app.use('/api/blogs', blogRouter);

    app.all('*', (req, res) => {
        res.status(404).json({message: 'Not Found'});
    })

    app.listen(4200, () => {
        console.log('Server is running on port 4200');
    })
}

main();