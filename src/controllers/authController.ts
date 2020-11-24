import { Router, Response, Request, NextFunction } from 'express';
import bodyParser from 'body-parser';
import passport from 'passport';
import jwt from 'jsonwebtoken';

const router = Router();
const jsonParser = bodyParser.json();

router.post('/signup', jsonParser, async (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate('signup', { session: false }, async (err, user, info) => {
        try {
            if (err || !user) {
                const error = new Error('An error occurred.');

                res.json({ error: info.message });

                return next(error);
            }

            res.json({
                message: 'Signup successful',
            });
        } catch (error) {
            return next(error);
        }
    })(req, res, next);
});

router.post('/signin', jsonParser, async (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate('login', async (err, user, info) => {
        try {
            if (err || !user) {
                const error = new Error('An error occurred.');

                res.json({ error: info.message });

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
