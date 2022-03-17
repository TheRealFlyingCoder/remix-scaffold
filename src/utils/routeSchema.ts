import { z } from 'zod';
import { YamlConfig } from '../typings/Config';

interface RouteObject {
    slug?: string;
    type?: "basic" | "layout" | "pathless" | "index";
    name: string;
    children?: RouteObject[]
}

const routeObject: z.Schema<RouteObject> = z.late.object(() => ({
    name: z.string().regex(/^[A-Z]([A-Za-z]+)/g, 'Name should be PascalCase with no numbers or special characters'),
    type: z.enum(['basic', 'layout', 'pathless', 'index']).default('basic'),
    slug: z.string().regex(/^[a-z]([A-Za-z]+)/g, 'Slug should be camelCase with no numbers or special characters').optional(),
    children: z.array(routeObject).optional()
}));

export const configSchema = z.object({
    structure: z.enum(['co-locate', 'split'],).default('co-locate'),
    routes: z.array(routeObject)
})
 
export type ScaffoldConfig = z.infer<typeof configSchema>

export const validateConfig = (doc: YamlConfig): ScaffoldConfig => {
    const checks = configSchema.safeParse(doc);

    if(!checks.success) {
        throw checks.error.issues.reduce((acc, curr) => {
            let newError = `${acc}\n`;
            console.log(JSON.stringify(curr));

            curr.path.forEach((path, index) => {
                newError = `${newError}\n${new Array(index + 2).join('-')}${path}`
            });

            return `${newError}: ${curr.message}`;
        }, '')
    };

    return checks.data;
} 