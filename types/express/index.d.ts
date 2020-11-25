declare namespace Express {
    interface User {
        _id?: string;
        email?: string;
    }

    interface Request {
        user?: User;
    }
}
