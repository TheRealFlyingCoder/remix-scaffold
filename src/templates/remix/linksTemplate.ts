export default (): string => {
    return `import type { LinksFunction } from 'remix';
    
export const links: LinksFunction = () => {
    return [];
};
`;
};