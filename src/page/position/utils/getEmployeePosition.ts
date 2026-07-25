// import type { EmployeeData } from "../../employee/employee.type";
// import type { DataPositions } from "../../position/position.type";

// export type PositionWithEmployee = DataPositions & {
//   employees: { employeeId: number }[] | null;
// };

// export const getEmployeePosition = (
//   positions: DataPositions[],
//   employees: EmployeeData[],
// ): PositionWithEmployee[] => {
//   const map = new Map<number, EmployeeData>();
//   for (const item of employees) {
//     const positionId = item.positions[0]?.id;
//     if (positionId) {
//       map.set(positionId, item);
//     }
//   }
//   return positions.map((position) => {
//     const employee = map.get(position.id);
//     return {
//       ...position,
//       employees: employee ? [{ employeeId: employee.id }] : null,
//     };
//   });
// };
import type { EmployeeData } from "../../employee/employee.type";
import type { DataPositions } from "../../position/position.type";

export type PositionWithEmployee = DataPositions & {
  employees: { employeeId: number; slot: number[]; status: "success" }[] | null;
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
  for (const item of employees) {
    for (let i = 0; i < item.positions.length; i++) {
      const employeesInPosition = map.get(item.positions[i].id);
      if (employeesInPosition) {
        employeesInPosition.push({
          employee: item,
          slot: item.positions[i].slot,
        });
      } else {
        map.set(item.positions[i].id, [
          { employee: item, slot: item.positions[i].slot },
        ]);
      }
    }
  }

  return positions.map((position) => {
    const employeeInfo = map.get(position.id);

    return {
      ...position,
      employees:
        employeeInfo === undefined
          ? null
          : employeeInfo.map((item) => ({
              employeeId: item.employee.id,
              slot: item.slot,
              status: "success",
            })),
    };
  });
};
