export default (): string => {
    return `import type {  } from 'remix';
import { ActionFunction, json } from 'remix';

export const action: ActionFunction = async ({ request }) => {
    return json('');
};
`;
};