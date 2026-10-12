import { body } from "express-validator";
import { INCIDENT_SEVERITIES } from "../types/incident.types.ts";
import { validate } from "./ValidatorFunction.ts";

export const createIncidentValidator = [
    body("title")
        .trim()
        .notEmpty().withMessage("Title is required")
        .isLength({ max: 120 }).withMessage("Title must be 120 characters or fewer"),
    body("description").optional().isString().trim().isLength({ max: 2000 }),
    body("severity").isIn(INCIDENT_SEVERITIES).withMessage("Invalid severity"),
    body("serviceId").isMongoId().withMessage("Invalid service id"),
    validate,
];