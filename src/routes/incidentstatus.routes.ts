import { Router } from "express";
import { updateIncidentStatus } from "../controllers/UpdateIncidentStatus.ts";
import { changeStatusValidator } from "../validation/incidentStatusValidator.ts";
import { authMiddleware } from "../middleware/AuthMiddleware.ts";
import { requireRole } from "../middleware/requireRole.ts";
import type { Role } from "../types/role.ts";

const IncidentRouter = Router();

IncidentRouter.post("/updateIncidentStatus/:id", authMiddleware, requireRole(["admin", "responder"] as Role[]), changeStatusValidator, updateIncidentStatus);

export default IncidentRouter;