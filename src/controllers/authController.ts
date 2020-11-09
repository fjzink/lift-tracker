import { Router, Response, Request, NextFunction } from 'express';
import bodyParser from 'body-parser';
import passport from 'passport';
import jwt from 'jsonwebtoken';

const router = Router();
const jsonParser = bodyParser.json();

router.post(
    '/signup',
    jsonParser,
    passport.authenticate('signup', { session: false }),
    async (req: Request, res: Response) => {
        res.send(req.body.email);
    },
);

router.post('/signin', jsonParser, async (req, res, next) => {
    passport.authenticate('login', async (err, user, info) => {
        try {
            if (err || !user) {
                const error = new Error('An error occurred.');

                return next(error);
            }

            req.login(user, { session: false }, async (error) => {
                if (error) return next(error);

                const body = { _id: user._id, email: user.email };
                const token = jwt.sign({ user: body }, 'TOP_SECRET');

                return res.json({ token });
            });
        } catch (error) {
            return next(error);
        }
    })(req, res, next);
});

export { router as authRouter };
