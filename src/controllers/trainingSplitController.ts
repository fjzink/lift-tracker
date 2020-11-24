import { Router, Response, Request } from 'express';
import bodyParser from 'body-parser';
import '../auth/auth';
import passport from 'passport';

const router = Router();
const jsonParser = bodyParser.json();

// router.use(passport.authenticate('jwt', { session: false }));

router.get('/', (req: Request, res: Response) => {
    console.log(req.cookies);
    res.json({
        message: 'You made it to the secure route',
        user: req.user,
        token: req.query.secret_token,
    });
});

router.post('/', jsonParser, (req: Request, res: Response) => {
    console.log(req.body);
    res.send('got the data :)');
});

export { router as trainingSplitRouter };
