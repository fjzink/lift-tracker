import passport from 'passport';
import { Strategy as localStrategy } from 'passport-local';
import bcrypt from 'bcrypt';
import { db } from '../server';

passport.use(
    'signup',
    new localStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true,
        },
        async (req, email, password, done) => {
            const { firstName, lastName } = req.body;
            try {
                const hashedPassword = await bcrypt.hash(password, 10);
                const user = {
                    email,
                    password: hashedPassword,
                    firstName,
                    lastName,
                };
                console.log(user);
                const users = db.collection('users');
                await users.insertOne(user);
                done(null, user);
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
        },
        async (email, password, done) => {
            try {
                const users = db.collection('users');
                const user = await users.findOne({ email });

                if (!user) {
                    return done(null, false, { message: 'User not found' });
                }

                const validate = await bcrypt.compare(password, user.password);

                if (!validate) {
                    return done(null, false, { message: 'Wrong Password' });
                }

                return done(null, user, { message: 'Logged in Successfully' });
            } catch (error) {
                return done(error);
            }
        },
    ),
);
