import type {
  CreateTreeStrategy,
  DataPositions,
  TreeNode,
} from "../position.type";

export const buildPositionTree = <T extends DataPositions>(
  nodes: T[],
  createStrategy: (nodes: T[]) => CreateTreeStrategy<T>,
): TreeNode<T>[] => {
  const { root, getChildren } = createStrategy(nodes);

  const stack: TreeNode<T>[] = [
    {
      node: root,
      level: 0,
    },
  ];

  const result: TreeNode<T>[] = [];

  while (stack.length > 0) {
    const current = stack.pop()!;

    result.push(current);

    const children = getChildren(current.node);

    for (let i = children.length - 1; i >= 0; i--) {
      stack.push({
        node: children[i],
        level: current.level + 1,
      });
    }
  }

  return result;
};
