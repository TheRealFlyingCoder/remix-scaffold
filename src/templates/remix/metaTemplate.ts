export default (name: string): string => {
    return `import { MetaFunction } from 'remix';

export const meta: MetaFunction = () => {
    return { 
        title: '${name}'
    };
};
`;
};