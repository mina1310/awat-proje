import type { PositionWithEmployee } from "../../position/utils/getEmployeePosition";
import { createKey } from "./createKey";

export type EmployeeHierarchyList = PositionWithEmployee & {
  children: EmployeeHierarchyList[];
};
const buildHierarchyPersonnel = (
  positions: PositionWithEmployee[],
): EmployeeHierarchyList[] => {
  const map = new Map<string, EmployeeHierarchyList>();
  const flatNode: EmployeeHierarchyList[] = [];
  const root: EmployeeHierarchyList[] = [];
  for (const position of positions) {
    if (!position.employees) {
      const node = { ...position, children: [] };
      map.set(createKey(position.id, null), node);
      flatNode.push(node);
      continue;
    }
    for (let i = 0; i <= position.employees.length - 1; i++) {
      const node: EmployeeHierarchyList = {
        ...position,
        employees: [position.employees[i]],
        children: [],
      };
      map.set(createKey(position.id, position.employees[i].slot), node);
      flatNode.push(node);
    }
  }
  for (const position of flatNode) {
    if (!position.employees) {
      continue;
    }
    const slotLength = position.employees[0].slot.length;
    if (position.parentId === null) {
      const currentNodeKey = createKey(position.id, position.employees[0].slot);
      const positionItem = map.get(currentNodeKey);
      if (!positionItem) {
        throw new Error(`node with ${currentNodeKey} not found in map`);
      }
      root.push(positionItem);
      continue;
    }
    const parentKey = createKey(
      position.parentId,
      position.employees[0].slot.slice(0, slotLength - 1),
    );
    const parentItem = map.get(parentKey);
    if (!parentItem) {
      throw new Error(`node with ${parentKey} not found in map`);
    }
    parentItem.children.push(position);
  }
  return root;
};
export default buildHierarchyPersonnel;
