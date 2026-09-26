import type { DataPositions } from "../position/position.type";
import type { UserData } from "../user/user.type";

export type SelectedPositionData = {
  id: number;
  slot: number[];
};

export interface EmployeeData {
  user: UserData | null;
  positions: SelectedPositionData[];
}

export type PositionWithEmployee = DataPositions & {
  employees:
    | {
        user: {
          id: number | null;
        };
        slot: number[];
        status: "success";
      }[]
    | null;
};

export type PositionWithUserEmployee = PositionWithEmployee & {
  user: UserData | null;
};

export type StackItem = {
  position: PositionWithEmployee;
  slot: number[];
  level: number;
  isFake: boolean;
};
