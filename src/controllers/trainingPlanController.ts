import { Router, Response, Request } from 'express';
import bodyParser from 'body-parser';
import passport from 'passport';
import { db } from '../server';
import '../auth/auth';

const router = Router();
const jsonParser = bodyParser.json();

router.use(passport.authenticate('jwt', { session: false }));

router.get('/', async (req: Request, res: Response) => {
    const trainingPlans = db.collection('trainingsplits');
    const plans = await trainingPlans.find({ user_id: req.user?._id }).toArray();

    res.json({
        message: 'Training plans',
        user: req.user,
        token: req.query.secret_token,
        plans,
    });
});

export { router as trainingPlanRouter };
