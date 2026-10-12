import type { Request, Response } from "express";
import { createIncident } from "../services/CreateIncident.ts";
import { getIncidents, getIncidentById } from "../services/GetIncidents.ts";

export async function createIncidentHandler(req: Request, res: Response) {
    const incident = await createIncident({
        title: req.body.title,
        description: req.body.description,
        severity: req.body.severity,
        serviceId: req.body.serviceId,
        organizationId: req.user!.organizationId,
        userId: req.user!.id,
    });

    return res.status(201).json({ success: true, data: incident });
}

export async function getIncidentsHandler(req: Request, res: Response) {
    const incidents = await getIncidents(req.user!.organizationId as string);
    return res.status(200).json({ success: true, data: incidents });
}

export async function getIncidentByIdHandler(req: Request, res: Response) {
    const incident = await getIncidentById(req.params.id as string, req.user!.organizationId as string);
    return res.status(200).json({ success: true, data: incident });
}