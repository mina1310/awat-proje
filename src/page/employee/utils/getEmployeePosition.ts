import type { EmployeeData, PositionWithEmployee } from "../employee.type";
import type { DataPositions } from "../../position/position.type";

export const getEmployeePosition = (
  positions: DataPositions[],
  employees: EmployeeData[],
): PositionWithEmployee[] => {
  const map = new Map<number, EmployeeData[]>();

  for (const employee of employees) {
    for (const position of employee.positions) {
      const slot = position.slot;
      const slotIndex = slot[slot.length - 1];
      const positionAssignments = map.get(position.id);

      if (positionAssignments) {
        positionAssignments[slotIndex] = { ...employee, positions: [position] };
      } else {
        const employeeSlot: EmployeeData[] = [];
        employeeSlot[slotIndex] = {
          ...employee,
          positions: [position],
        };
        map.set(position.id, employeeSlot);
      }
    }
  }

  const result = positions.map((position) => {
    if (position.status === "inactive") {
      return {
        ...position,
        employees: null,
      };
    } else {
      const employeeInfo = map.get(position.id);
      if (!employeeInfo) {
        throw new Error(`No employee found for position ${position.id}`);
      } else {
        return {
          ...position,
          employees: employeeInfo.map((item) => ({
            user: {
              id: item.user?.id ?? null,
            },
            slot: item.positions[0].slot,
            status: "success" as const,
          })),
        };
      }
    }
  });
  return result;
};
