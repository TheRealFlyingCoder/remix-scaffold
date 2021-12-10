export interface YamlConfig {
    structure?: ScaffoldStructure;
    routes: Route[]
}

interface Route {
    name: string;
    url?: string;
    slug?: string;
    type?: RouteType;
    children?: Route[];
}

type ScaffoldStructure = 'split' | 'colocated';
type RouteType = 'standard' | 'layout' | 'resource';