import type { EmployeeData } from "../../employee/employee.type";
import type { DataPositions } from "../../position/position.type";

export type PositionWithEmployee = DataPositions & {
  employees: { employeeId: number; slot: number[]; status: "success" }[];
};
export type EmployeeInfo = {
  employee: EmployeeData;
  slot: number[];
};
export const getEmployeePosition = (
  positions: DataPositions[],
  employees: EmployeeData[],
): PositionWithEmployee[] => {
  const map = new Map<number, EmployeeInfo[]>();
  for (const employee of employees) {
    for (let i = 0; i < employee.positions.length; i++) {
      const slot = employee.positions[i].slot;
      const slotIndex = slot[slot.length - 1];
      const employeeInfo: EmployeeInfo = {
        employee,
        slot,
      };

      const positionAssignments = map.get(employee.positions[i].id);
      if (positionAssignments) {
        positionAssignments[slotIndex] = employeeInfo;
      } else {
        const employeeSlot: EmployeeInfo[] = [];
        employeeSlot[slotIndex] = employeeInfo;
        map.set(employee.positions[i].id, employeeSlot);
      }
    }
  }
  console.log("map.get(2):", map.get(2));
  return positions.map((position) => {
    const employeeInfo = map.get(position.id);
    if (!employeeInfo) {
      throw new Error(`No employee found for position ${position.id}`);
    }
    return {
      ...position,
      employees: employeeInfo.map((item) => ({
        employeeId: item.employee.id,
        slot: item.slot,
        status: "success",
      })),
    };
  });
};
