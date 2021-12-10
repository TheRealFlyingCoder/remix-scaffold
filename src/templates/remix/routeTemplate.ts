export default (viewPath: string, name: string): string => {
  let pathInitial = "";
  name.split("/").forEach(() => {
    pathInitial = `${pathInitial}../`;
  });
  return `export { default, action, loader, links, meta } from '${pathInitial}${viewPath
    .replace(/\\/g, "/")
    .replace("app/", "")}';
`;
};

