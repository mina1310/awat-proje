import type { DataPositions } from "../../position/position.type";
import type { EmployeeData } from "../employee.type";

export type PositionWithEmployee = DataPositions & {
  employees: { employeeId: number }[] | null;
};

export const getEmployeePosition = (
  positions: DataPositions[],
  employees: EmployeeData[],
): PositionWithEmployee[] => {
  const map = new Map<number, EmployeeData>();
  for (const item of employees) {
    for (let i = 0; i < item.positions.length; i++) {
      map.set(item.positions[i].id, { ...item });
    }
  }

  return positions.map((position) => {
    const employeeData = map.get(position.id);

    return {
      ...position,
      employees: employeeData ? [{ employeeId: employeeData.id }] : null,
    };
  });
};
