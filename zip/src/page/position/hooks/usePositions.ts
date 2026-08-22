import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../store";
import { useEffect } from "react";
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
    positionsItems,
    loading,
    error,
  };
};
export default usePositions;
