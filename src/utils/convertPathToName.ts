const convertPathToName = (path: string): string => {
  const pathToName: Record<string, string> = {
    dashboard: "داشبورد",
    organizationChart: "ساختار سازمانی",
    position: "چارت سازمانی",
    personal: "چارت پرسنلی",
    tasks: "کارها",
  };
  return pathToName[path] || path;
};
export default convertPathToName;
