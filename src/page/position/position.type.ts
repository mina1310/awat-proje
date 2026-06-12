import type { DataList } from "../../utils/buildHierarchy";
// import type { DataEmployee } from "../employee/employee.type";

export interface DataPositions {
  title: string;
  id: number;
  parentId: null | number;
  capacity: number;
  organization: string;
  status: "active";
  // employees: DataEmployee[];
}
export type PositionNode = DataList<DataPositions>;
