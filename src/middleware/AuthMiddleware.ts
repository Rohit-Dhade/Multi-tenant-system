import jwt from "jsonwebtoken"
import type { Request, Response, NextFunction } from "express";

export interface AuthPayload {
    id: string;
    organizationId: string;
    role: "admin" | "responder" | "viewer";
}

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET!);
        req.user = decoded as AuthPayload;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token.' });
    }
};
