
import type { Request, Response, NextFunction } from "express";

type Role = "admin" | "responder" | "viewer";

export const requireRole = (allowedRoles: Role[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        if (!req.user) {
            return res.status(401).json({ error: "Unauthorized" });
        }
        console.log("user", req.user);
        const userRole = req.user.role;
        if (!allowedRoles.includes(userRole)) {
            return res.status(403).json({ error: "Forbidden" });
        }
        next();
    }
}