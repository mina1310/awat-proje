import type { DataList } from "../../utils/buildHierarchy";

export interface DataPositions {
  title: string;
  id: number;
  parentId: null | number;
  capacity: number;
  organization: string;
  status: "active" | "inactive";
}
export type PositionNode = DataList<DataPositions>;
export type TreeNode<T extends DataPositions> = {
  node: T;
  level: number;
  key?: string;
  slot?: number[];
  isFake?: boolean;
};
export type CreateTreeStrategy<T extends DataPositions> = {
  root: T;
  getChildren: (node: T) => T[];
};
