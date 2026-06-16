import type { DataList } from "../../utils/buildHierarchy";

export interface DataPositions {
  title: string;
  id: number;
  parentId: null | number;
  capacity: number;
  organization: string;
  status: "active";
}
export type PositionNode = DataList<DataPositions>;
