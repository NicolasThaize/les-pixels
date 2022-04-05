import express, {Request, Response } from 'express';
const router = express.Router();


// Every routes in /admin, prefix every path by "admin"

router.get('/list',(req: Request, res: Response) => {
    res.render('game/list/index.ejs', {imgs: []});
});

router.get('/play/:id',(req: Request, res: Response) => {
    res.render('admin/img/create/index.ejs', {imgUrl: undefined});
});

export default router;
