import passport from 'passport';
import { Strategy as localStrategy } from 'passport-local';

passport.use(
    'signup',
    new localStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true,
        },
        async (req, email, password, done) => {
            try {
                console.log(req.body);
                done(null, req.body);
            } catch (error) {
                done(error);
            }
        },
    ),
);

passport.use(
    'login',
    new localStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true,
        },
        async (req, email, password, done) => {
            try {
                console.log(req.body);
            } catch (error) {
                return done(error);
            }
        },
    ),
);
