import { Router, Response, Request } from 'express';
import bodyParser from 'body-parser';

const router = Router();
const jsonParser = bodyParser.json();

router.get('/', (req: Request, res: Response) => {
    res.send('index of all exercises');
});

router.post('/', jsonParser, (req: Request, res: Response) => {
    console.log(req.body);
    res.send('got the data :)');
});

export { router as exerciseRouter };
