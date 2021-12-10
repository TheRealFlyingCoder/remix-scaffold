export default (name: string): string => {
    return `export { default } from './${name}';
export * from './${name}.loader';
export * from './${name}.meta';
export * from './${name}.links';  
export * from './${name}.action';
`;
};