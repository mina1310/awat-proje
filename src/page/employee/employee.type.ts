export type selectedPositionData = {
  id: number;
  title: string;
  slot: number[];
};
export interface EmployeeData {
  firstName: string;
  lastName: string;
  userName: string;
  mobileNumber: string;
  id: number;
  positions: selectedPositionData[];
}
