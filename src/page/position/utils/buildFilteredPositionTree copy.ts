import type { DataPositions, TreeNode } from "../position.type";

export const buildFilteredPositionTree = (
  positions: DataPositions[],
): TreeNode<DataPositions>[] => {
  const positionMap = new Map<string, DataPositions[]>();
  for (const position of positions) {
    const key = String(position.parentId);
    const dataMap = positionMap.get(key);

    if (dataMap) {
      dataMap.push(position);
    } else {
      positionMap.set(key, [position]);
    }
  }
  const root = positionMap.get("null")![0];
  const stack: TreeNode<DataPositions>[] = [
    {
      node: root,
      level: 0,
    },
  ];

  const result: TreeNode<DataPositions>[] = [];

  while (stack.length > 0) {
    const current = stack.pop()!;

    result.push(current);

    const children = positionMap.get(String(current.node.id));
    if (children) {
      for (let i = children.length - 1; i >= 0; i--) {
        const selectedChildren = children[i];
        if (selectedChildren.status === "active") {
          stack.push({
            node: selectedChildren,
            level: current.level + 1,
          });
        }
      }
    }
  }

  return result;
};
