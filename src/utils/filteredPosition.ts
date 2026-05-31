import type { PositionNode } from "../page/position/position.type";

const filteredPosition = (nodes: PositionNode[]): PositionNode[] => {
  return nodes
    .map((node) => {
      const filteredChildren = filteredPosition(node.children);
      const hasEmployee = node.employees && node.employees.length > 0;
      const targetNode = hasEmployee || filteredChildren.length > 0;
      if (!targetNode) return null;
      return { ...node, children: filteredChildren };
    })
    .filter((node): node is PositionNode => node !== null);
};

export default filteredPosition;
