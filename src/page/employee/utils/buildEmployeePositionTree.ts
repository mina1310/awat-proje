import type { TreeNode } from "../../position/position.type";

import type { UserData } from "../../user/user.type";
import type {
  PositionWithEmployee,
  PositionWithUserEmployee,
  StackItem,
} from "../employee.type";
import { createKey } from "./createKey";

export const buildEmployeePositionTree = (
  nodes: PositionWithEmployee[],
  getUserById: (id: number) => UserData | undefined,
): TreeNode<PositionWithUserEmployee>[] => {
  const childrenMap = new Map<string, PositionWithEmployee[]>();

  for (const position of nodes) {
    const parentId = String(position.parentId);
    const children = childrenMap.get(parentId);

    if (children) {
      children.push(position);
    } else {
      childrenMap.set(parentId, [position]);
    }
  }

  const root = childrenMap.get("null");

  if (!root?.length) {
    throw new Error("Root position not found");
  }
  if (!root[0].employees?.length) {
    throw new Error(`No assignment found for root position ${root[0].id}`);
  }

  const result: TreeNode<PositionWithUserEmployee>[] = [];
  const stack: StackItem[] = [];
  stack.push({
    position: root[0],
    slot: root[0].employees[0].slot,
    level: 0,
    isFake: false,
  });

  while (stack.length > 0) {
    const current = stack.pop()!;

    const { position, slot, level, isFake } = current;
    const employeeUserId = position.employees?.[0]?.user?.id ?? null;

    const user =
      employeeUserId !== null ? (getUserById(employeeUserId) ?? null) : null;

    result.push({
      node: {
        ...position,
        user,
      },
      level,
      slot,
      key: createKey(position.id, slot),
      isFake,
    });

    const children = childrenMap.get(String(position.id));

    if (!children) {
      continue;
    }

    for (let i = children.length - 1; i >= 0; i--) {
      const child = children[i];

      if (child.status === "inactive") {
        stack.push({
          position: child,
          slot: [...slot, 0],
          level: level + 1,
          isFake: true,
        });

        continue;
      }

      if (!child.employees?.length) {
        throw new Error(`No assignment found for active position ${child.id}`);
      }

      for (let j = child.employees.length - 1; j >= 0; j--) {
        const childSlot = child.employees[j].slot;
        const createdSlot = [...slot, j];

        if (
          childSlot[childSlot.length - 2] ===
          createdSlot[createdSlot.length - 2]
        ) {
          stack.push({
            position: { ...child, employees: [child.employees[j]] },
            slot: childSlot,
            level: level + 1,
            isFake: false,
          });
        } else {
          stack.push({
            position: {
              ...child,
              employees: [
                {
                  ...child.employees[j],
                  user: {
                    id: null,
                  },
                },
              ],
            },
            slot: createdSlot,
            level: level + 1,
            isFake: true,
          });
        }
      }
    }
  }

  return result;
};
