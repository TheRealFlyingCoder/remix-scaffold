import { z } from 'zod';

interface RouteObject {
    slug?: string;
    type?: "basic" | "layout" | "pathless" | "index";
    name: string;
    children?: RouteObject[]
}

const routeObject: z.Schema<RouteObject> = z.late.object(() => ({
    name: z.string().regex(/^[A-Z]([A-Za-z]+)/g, 'Name should be PascalCase with no numbers or  special characters'),
    type: z.enum(['basic', 'layout', 'pathless', 'index']).default('basic'),
    slug: z.string().regex(/^[a-z]([A-Za-z]+)/g, 'Slug should be camelCase with no numbers or special characters').optional(),
    children: z.array(routeObject).optional()
}));

export const routeSchema = z.object({
    structure: z.enum(['co-locate', 'split'],).default('co-locate'),
    routes: z.array(routeObject)
})