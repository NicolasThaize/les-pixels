import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import adminRouter from './routes/admin';
import gameRouter from './routes/game';

dotenv.config();

const app: Express = express();
const port: string = process.env.PORT || "3000";

app.set('views', __dirname + '/pages');
app.set('view engine', 'ejs'); // Sets the view engine
app.use(express.static(__dirname + '/public'));

app.use('/admin', adminRouter);
app.use('/game', gameRouter);

app.locals = {
    user: {
        username: "Jojo",
        isAdmin: true
    }
};

app.get('/', (req: Request, res: Response) => {
    res.render('index.ejs');
});

app.get('/register',(req: Request, res: Response) => {
    res.render('register/index.ejs');
});

app.get('/login',(req: Request, res: Response) => {
    res.render('login/index.ejs');
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});