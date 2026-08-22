import type { CreateTreeStrategy, DataPositions } from "../position.type";
export const createPositionMap = (
  nodes: DataPositions[],
): CreateTreeStrategy<DataPositions> => {
  const positionMap = new Map<string, DataPositions[]>();
  for (const position of nodes) {
    const key = String(position.parentId);
    const dataMap = positionMap.get(key);

    if (dataMap) {
      dataMap.push(position);
    } else {
      positionMap.set(key, [position]);
    }
  }
  const root = positionMap.get("null")![0];

  return {
    root,
    getChildren: (node) => positionMap.get(String(node.id)) ?? [],
  };
};
