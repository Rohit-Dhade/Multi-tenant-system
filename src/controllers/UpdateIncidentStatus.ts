import type { Request, Response } from "express";
import { changeIncidentStatus } from "../services/ChangeIncidentStatus.ts";

export async function updateIncidentStatus(req: Request, res: Response) {
    const incident = await changeIncidentStatus({
        incidentId: req.params.id as string,
        newStatus: req.body.status,
        organizationId: req.user!.organizationId,
        userId: req.user!.id,
        note: req.body.note,
    });

    return res.status(200).json({ success: true, data: incident });
}