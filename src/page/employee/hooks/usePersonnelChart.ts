import { useMemo } from "react";
import buildHierarchy from "../../../utils/buildHierarchy";
import usePositions from "../../position/hooks/usePositions";
import { getEmployeePosition } from "../utils/getEmployeePosition";
import { useEmployees } from "./useEmployees";
import filteredPosition from "../../../utils/filteredPosition";

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
    employeeItems,
  };
};
