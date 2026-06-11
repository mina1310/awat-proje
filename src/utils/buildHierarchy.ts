export type DataList<T> = T & { children: DataList<T>[] };

const buildHierarchy = <
  U extends { id: number | string; parentId: number | string | null },
>(
  items: U[],
): DataList<U>[] => {
  const map = new Map<U["id"], DataList<U>>();
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
  console.log({ root });
  return root;
};
export default buildHierarchy;
