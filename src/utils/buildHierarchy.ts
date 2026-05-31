export type DataList<T> = T & { children: DataList<T>[] };

const buildHierarchy = <
  T extends { id: number | string; parentId: string | number | null },
>(
  items: T[],
): DataList<T>[] => {
  let map: Record<number | string, DataList<T>> = {};
  let root = [];
  for (let item of items) {
    map[item.id] = { ...item, children: [] };
  }
  for (let item of items) {
    if (item.parentId !== null) {
      const parentNode = map[item.parentId];
      parentNode.children.push(map[item.id]);
    } else {
      root.push(map[item.id]);
    }
  }
  return root;
};
export default buildHierarchy;
