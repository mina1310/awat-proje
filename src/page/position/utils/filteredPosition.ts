import type { PositionWithEmployee } from "../page/employee/utils/getEmployeePosition";
import type { DataList } from "./buildHierarchy";

const filteredPosition = (
  nodes: DataList<PositionWithEmployee>[],
): DataList<PositionWithEmployee>[] => {
  return nodes
    .map((node) => {
      const filteredChildren = filteredPosition(node.children);
      const hasEmployee = node.employees && node.employees.length > 0;
      const targetNode = hasEmployee || filteredChildren.length > 0;
      if (!targetNode) return null;
      return { ...node, children: filteredChildren };
    })
    .filter((node): node is DataList<PositionWithEmployee> => node !== null);
};

export default filteredPosition;
