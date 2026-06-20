import type { EmployeeData } from "../../employee/employee.type";
import type { DataPositions } from "../../position/position.type";

export type PositionWithEmployee = DataPositions & {
  employees: { employeeId: number }[] | null;
};

export const getEmployeePosition = (
  positions: DataPositions[],
  employees: EmployeeData[],
): PositionWithEmployee[] => {
  const map = new Map<number, number>();
  for (const item of employees) {
    for (let i = 0; i < item.positions.length; i++) {
      map.set(item.positions[i].id, item.id);
    }
  }

  return positions.map((position) => {
    const employeeId = map.get(position.id);

    return {
      ...position,
      employees: employeeId ? [{ employeeId }] : null,
    };
  });
};
