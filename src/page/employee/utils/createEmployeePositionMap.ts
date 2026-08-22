import type { CreateTreeStrategy } from "../../position/position.type";
import type { PositionWithEmployee } from "../../position/utils/getEmployeePosition";

export const createEmployeePositionMap = (
  nodes: PositionWithEmployee[],
): CreateTreeStrategy<PositionWithEmployee> => {
  console.log("nodes:", nodes);
  const employeePositionMap = new Map<string, PositionWithEmployee[]>();
  for (const position of nodes) {
    console.log("position:", position);
    for (const employee of position.employees) {
      console.log("employee:", employee);
      const node: PositionWithEmployee = {
        ...position,
        employees: [employee],
      };
      const key = `${position.parentId}-${employee.slot.slice(0, -1).join("-")}`;
      console.log("CREATED KEY:", key);
      const dataMap = employeePositionMap.get(key);
      if (dataMap) {
        dataMap.push(node);
      } else {
        employeePositionMap.set(key, [node]);
      }
      console.log("employeePositionMap keys:", [...employeePositionMap.keys()]);
    }
  }
  const rootNodes = employeePositionMap.get("null-");

  if (!rootNodes) {
    throw new Error("Root position not found with key: null-");
  }

  const root = rootNodes[0];
  return {
    root,

    getChildren: (node) => {
      const slot = node.employees[0].slot;

      const key = `${node.id}-${slot.join("-")}`;

      return employeePositionMap.get(key) ?? [];
    },
  };
};
