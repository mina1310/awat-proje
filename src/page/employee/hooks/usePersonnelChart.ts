import { useMemo, useState } from "react";
import usePositions from "../../position/hooks/usePositions";

import { useEmployees } from "./useEmployees";

import { getEmployeePosition } from "../utils/getEmployeePosition";

import { buildEmployeePositionTree } from "../utils/buildEmployeePositionTree";
import { buildFilteredEmployeePositionTree } from "../utils/buildFilteredEmployeePositionTree ";
import { useUser } from "../../user/hooks/useUser";

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
  const { getUserById } = useUser();

  const [isFiltered, setIsFiltered] = useState(true);

  const handleFiltered = () => {
    setIsFiltered((prev) => !prev);
  };

  const personnelChartData = useMemo(() => {
    if (positionLoading || employeeLoading) {
      return [];
    }

    if (positionsItems.length === 0 || employeeItems.length === 0) {
      return [];
    }

    const positionsWithEmployee = getEmployeePosition(
      positionsItems,
      employeeItems,
    );

    return isFiltered
      ? buildFilteredEmployeePositionTree(positionsWithEmployee, getUserById)
      : buildEmployeePositionTree(positionsWithEmployee, getUserById);
  }, [
    positionsItems,
    employeeItems,
    positionLoading,
    employeeLoading,
    isFiltered,
  ]);

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
    handleFiltered,
    isFiltered,
  };
};
