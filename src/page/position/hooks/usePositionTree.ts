import { useMemo } from "react";
import usePositions from "./usePositions";
import { buildPositionTree } from "../utils/buildPositionTree";
import { createPositionMap } from "../utils/createPositionMap";

const usePositionTree = () => {
  const { positionsItems, loading, error } = usePositions();

  const positions = useMemo(() => {
    if (loading || positionsItems.length === 0) {
      return [];
    }

    return buildPositionTree(positionsItems, createPositionMap);
  }, [positionsItems, loading]);

  return {
    positions,
    loading,
    error,
  };
};
export default usePositionTree;
