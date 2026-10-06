export function makeSlug(organizationName: string): string {

    return organizationName
        .toLowerCase()
        .replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '');
}