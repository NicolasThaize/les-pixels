import express, {Request, Response } from 'express';
const router = express.Router();


// Every routes in /admin, prefix every path by "admin"

router.get('/',(req: Request, res: Response) => {
    res.render('admin/index.ejs');
});

router.get('/img/create',(req: Request, res: Response) => {
    res.render('admin/img/create/index.ejs', {imgUrl: undefined});
});

router.get('/img/list',(req: Request, res: Response) => {
    res.render('admin/img/list/index.ejs', {imgs: []});
});

export default router;
