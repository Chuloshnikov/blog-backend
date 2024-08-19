import express from 'express';
import { blogRouter } from './src/blog/blog.controler.js';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();

//для работы dirname с импортами на беке
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname = path.dirname(__filename);
//___________________________________

app.set('views', path.join(__dirname, '/src/views'));
app.set('view engine', 'ejs');

async function main() {
    app.use(express.json());

    app.use('/api/blogs', blogRouter);

    app.use('/profile', (req, res) => {
        res.render('profile', { 
            user: {
                name: "John Doe",
                age: 56
            }
    })
    })

    app.all('*', (req, res) => {
        res.status(404).json({message: 'Not Found'});
    })

    app.listen(process.env.PORT || 8080, () => {
        console.log('Server is running on port 4200');
    })
}

main();