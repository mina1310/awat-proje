import { useMemo, useState } from "react";
import usePositions from "./usePositions";
import { buildPositionTree } from "../utils/buildPositionTree";
import { buildFilteredPositionTree } from "../utils/buildFilteredPositionTree copy";

const usePositionTree = () => {
  const { positionsItems, loading, error } = usePositions();
  const [isFiltered, setIsFiltered] = useState<boolean>(true);

  const handleFiltered = () => {
    setIsFiltered((prev) => !prev);
  };

  const positions = useMemo(() => {
    if (loading || positionsItems.length === 0) {
      return [];
    }

    return isFiltered
      ? buildFilteredPositionTree(positionsItems)
      : buildPositionTree(positionsItems);
  }, [positionsItems, loading, isFiltered]);

  return {
    positions,
    loading,
    error,
    handleFiltered,
    isFiltered,
  };
};
export default usePositionTree;
