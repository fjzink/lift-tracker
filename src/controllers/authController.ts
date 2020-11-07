import { Router, Response, Request, NextFunction } from 'express';
import bodyParser from 'body-parser';
import passport from 'passport';

const router = Router();
const jsonParser = bodyParser.json();

router.post(
    '/signup',
    jsonParser,
    passport.authenticate('signup', { session: false }),
    async (req: Request, res: Response, next: NextFunction) => {
        res.send(req.body.email);
    },
);

export { router as authRouter };
