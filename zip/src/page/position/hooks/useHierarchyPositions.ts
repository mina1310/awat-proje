import { useMemo } from "react";
import buildHierarchy from "../../../utils/buildHierarchy";
import type { DataPositions } from "../position.type";
import usePositions from "./usePositions";

const useHierarchyPositions = () => {
  const { positionsItems, loading, error } = usePositions();

  const positions = useMemo(
    () => buildHierarchy<DataPositions>(positionsItems),
    [positionsItems],
  );

  return {
    positions,
    loading,
    error,
  };
};
export default useHierarchyPositions;
