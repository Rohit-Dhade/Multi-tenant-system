import type { ClientSession } from "mongoose"
import { MemberShipModel } from "../models/MembershipModel.ts";
import { ApiError } from "./ApiError.ts";
import mongoose from "mongoose"

type Role = "admin" | "viewer" | "responder";

export async function createMemberShip(
    userId: mongoose.Types.ObjectId,
    organizationId: mongoose.Types.ObjectId,
    role: Role,
    session: ClientSession
) {
    const [membership] = await MemberShipModel.create(
        [{ userId, organizationId, role }],
        { session }
    );

    if (!membership) {
        throw new ApiError(500, "Failed to create membership");
    }

    return membership;
}