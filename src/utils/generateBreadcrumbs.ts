import convertPathToName from "./convertPathToName";
const generateBreadcrumbs = (path: string) => {
  const pathArray = path.split("/").filter((x: string) => x);
  return pathArray.map((item, index) => {
    const isLastPath = index === pathArray.length - 1;
    const name = convertPathToName(item);
    const moveTo = `${pathArray.slice(0, index + 1).join("/")}`;

    return {
      isLastPath,
      name,
      moveTo,
    };
  });
};
export default generateBreadcrumbs;
