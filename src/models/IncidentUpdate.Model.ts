import mongoose, { type Document } from "mongoose";
import {
    UPDATE_TYPES,
    UPDATE_VISIBILITIES,
    type UpdateType,
    type UpdateVisibility,
} from "../types/update.types.ts";
import { INCIDENT_STATUSES, type IncidentStatus } from "../types/incident.types.ts";

export interface IIncidentUpdate extends Document {
    incidentId: mongoose.Types.ObjectId;
    organizationId: mongoose.Types.ObjectId;
    authorId: mongoose.Types.ObjectId;
    type: UpdateType;
    message: string;
    visibility: UpdateVisibility;
    fromStatus?: IncidentStatus;
    toStatus?: IncidentStatus;
}

const IncidentUpdateSchema = new mongoose.Schema<IIncidentUpdate>(
    {
        incidentId: { type: mongoose.Schema.Types.ObjectId, ref: "Incident", required: true },
        organizationId: { type: mongoose.Schema.Types.ObjectId, ref: "Organization", required: true },
        authorId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        type: { type: String, enum: UPDATE_TYPES, required: true },
        message: { type: String, required: true, trim: true },
        visibility: { type: String, enum: UPDATE_VISIBILITIES, default: "internal" },
        fromStatus: { type: String, enum: INCIDENT_STATUSES },
        toStatus: { type: String, enum: INCIDENT_STATUSES },
    },
    { timestamps: true }
);

IncidentUpdateSchema.index({ incidentId: 1, createdAt: 1 });

export const IncidentUpdateModel = mongoose.model<IIncidentUpdate>(
    "IncidentUpdate",
    IncidentUpdateSchema
);