export type selectaedPositionData = {
  id: number;
};
export interface EmployeeData {
  firstName: string;
  lastName: string;
  userName: string;
  mobileNumber: string;
  id: number;
  positions: selectaedPositionData[];
}
