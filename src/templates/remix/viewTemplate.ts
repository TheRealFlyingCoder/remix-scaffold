export default (name: string): string => {
    return `const ${name} = () => {
    return (
        <div>
            <h1>${name}</h1>
        </div>
    );
}

export default ${name};
`;
};