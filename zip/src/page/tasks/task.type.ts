import type { DataList } from "../../utils/buildHierarchy";

export interface DataTasks {
  id: string;
  parentId: string | null;
  creator: string;
  assignee: string;
  created_date: string;
  done_date: string;
  status: "انجام شده" | "انجام نشده";
  status_updated_date: string;
  title: string;
}
export type TaskNode = DataList<DataTasks>;
