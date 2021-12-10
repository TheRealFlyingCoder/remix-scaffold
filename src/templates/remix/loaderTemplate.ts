export default (): string => {
    return `import { LoaderFunction, json } from 'remix';
    
export const loader: LoaderFunction = async ({ request }) => {
    return json({});
};
`;
};