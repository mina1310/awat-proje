import type { DataList } from "../../../utils/buildHierarchy";
import type { PositionWithEmployee } from "./getEmployeePosition";
type StackItem = {
  node: DataList<PositionWithEmployee>;
  visited: boolean;
};

const filteredPosition = (
  nodes: DataList<PositionWithEmployee>[],
): DataList<PositionWithEmployee>[] => {
  if (nodes.length === 0) {
    return [];
  }

  const root = nodes[0];
  const stack: StackItem[] = [
    {
      node: root,
      visited: false,
    },
  ];

  const result = new Map<
    DataList<PositionWithEmployee>,
    DataList<PositionWithEmployee> | null
  >();

  while (stack.length > 0) {
    const current = stack.pop()!;

    if (!current.visited) {
      stack.push({
        node: current.node,
        visited: true,
      });

      for (let i = current.node.children.length - 1; i >= 0; i--) {
        stack.push({
          node: current.node.children[i],
          visited: false,
        });
      }
      continue;
    }

    const filteredChildren: DataList<PositionWithEmployee>[] = [];

    for (const child of current.node.children) {
      const filteredChild = result.get(child);

      if (filteredChild) {
        filteredChildren.push(filteredChild);
      }
    }

    const hasStatus = current.node.employees?.[0]?.status === "success";

    if (hasStatus || filteredChildren.length > 0) {
      result.set(current.node, {
        ...current.node,
        children: filteredChildren,
      });
    } else {
      result.set(current.node, null);
    }
  }

  const filteredRoot = result.get(root);

  return filteredRoot ? [filteredRoot] : [];
};

export default filteredPosition;
