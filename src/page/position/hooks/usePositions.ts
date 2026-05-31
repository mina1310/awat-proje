import { useDispatch, useSelector } from "react-redux";
import buildHierarchy from "../../../utils/buildHierarchy";
import type { DataPositions } from "../position.type";
import type { AppDispatch, RootState } from "../../../store";
import { useEffect, useMemo } from "react";
import { getPositions } from "../slice";

const usePositions = () => {
  const { positionsItems, loading, error } = useSelector(
    (state: RootState) => state.position,
  );
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getPositions());
  }, [dispatch]);

  return {
    positions: useMemo(
      () => buildHierarchy<DataPositions>(positionsItems),
      [positionsItems],
    ),
    loading,
    error,
  };
};
export default usePositions;
