import jwt from "jsonwebtoken";

export default async (req, res, next) => {
    try {
        const token = req.header("x-auth-token");
        
        const secret = process.env.SECRET;
        const decodedToken = jwt.verify(token, secret);
        req.user = decodedToken;
        next();    
    } catch (err) {
        res.status(401).send(
            {
                message: 'Unauthorized',
            },
        );
    }
};