export type DataList<T> = T & { children: DataList<T>[] };

const buildHierarchy = <
  T extends { id: number | string; parentId: number | string | null },
>(
  items: T[],
): DataList<T>[] => {
  const map = new Map<T["id"], DataList<T>>();
  const root = [];
  for (const item of items) {
    map.set(item.id, { ...item, children: [] });
  }
  for (const item of items) {
    const node = map.get(item.id);
    if (!node) {
      throw new Error(`node with ${item.id} not found in map`);
    }
    if (item.parentId === null) {
      root.push(node);
      continue;
    }
    const parentIdNode = map.get(item.parentId);
    if (!parentIdNode) {
      throw new Error(
        `parentNode ${item.parentId} not found for id:${item.id} in map`,
      );
    }
    parentIdNode.children.push(node);
  }
  return root;
};
export default buildHierarchy;
