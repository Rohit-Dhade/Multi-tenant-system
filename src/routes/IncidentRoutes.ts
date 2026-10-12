import { Router } from "express";
import { updateIncidentStatus } from "../controllers/UpdateIncidentStatus.ts";
import { changeStatusValidator } from "../validation/incidentStatusValidator.ts";
import { authMiddleware } from "../middleware/AuthMiddleware.ts";
import { requireRole } from "../middleware/requireRole.ts";
import { createIncidentHandler } from "../controllers/Incident.controller.ts";
import { createIncidentValidator } from "../validation/Incident.validator.ts";
import type { Role } from "../types/role.ts";
import { getIncidentsHandler, getIncidentByIdHandler } from "../controllers/Incident.controller.ts";

const IncidentRouter = Router();

IncidentRouter.post("/updateIncidentStatus/:id", authMiddleware, requireRole(["admin", "responder"] as Role[]), changeStatusValidator, updateIncidentStatus);
IncidentRouter.post("/create-incident", authMiddleware, requireRole(["admin", "responder"] as Role[]), createIncidentValidator, createIncidentHandler);
IncidentRouter.get("/", authMiddleware, requireRole(["admin", "responder", "viewer"] as Role[]), getIncidentsHandler);
IncidentRouter.get("/get-incident/:id", authMiddleware, requireRole(["admin", "responder", "viewer"] as Role[]), getIncidentByIdHandler);

export default IncidentRouter;