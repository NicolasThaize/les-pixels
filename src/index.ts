import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.set('views', __dirname + '/pages');
app.set('view engine', 'ejs'); // Sets the view engine
app.use(express.static(__dirname + '/public'));

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.get('/register',(req, res) => {
    res.render('register/index.ejs');
});

app.get('/login',(req, res) => {
    res.render('login/index.ejs');
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});