import type { ClientSession } from "mongoose"
import { OrganizationModel } from "../models/Organization.ts";


export async function createOrganization(
    organizationName: string,
    session: ClientSession
) {
    const [organization] = await OrganizationModel.create(
        [{ name: organizationName }],
        { session }
    );

    return organization;
}