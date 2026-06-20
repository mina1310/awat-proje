import { useMemo } from "react";
import buildHierarchy from "../../../utils/buildHierarchy";
import usePositions from "../../position/hooks/usePositions";

import { useEmployees } from "./useEmployees";

import { getEmployeePosition } from "../../position/utils/getEmployeePosition";
import filteredPosition from "../../position/utils/filteredPosition";
import type { EmployeeData } from "../employee.type";

export const usePersonnelChart = () => {
  const {
    positionsItems,
    loading: positionLoading,
    error: positionError,
  } = usePositions();
  const {
    employeeItems,
    loading: employeeLoading,
    error: employeeError,
  } = useEmployees();

  const employeeMap = useMemo(() => {
    const map = new Map<number, EmployeeData>();
    for (const employee of employeeItems) {
      map.set(employee.id, employee);
    }
    return map;
  }, [employeeItems]);

  const personnelChartData = useMemo(() => {
    const positionsWithEmployee = getEmployeePosition(
      positionsItems,
      employeeItems,
    );
    const convertToHierarchy = buildHierarchy(positionsWithEmployee);
    return filteredPosition(convertToHierarchy);
  }, [positionsItems, employeeItems]);
  const loading = {
    position: positionLoading,
    employee: employeeLoading,
  };
  const error = {
    position: positionError,
    employee: employeeError,
  };

  return {
    personnelChartData,
    error,
    loading,
    employeeMap,
  };
};
