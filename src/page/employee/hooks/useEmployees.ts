import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../store";
import { useEffect } from "react";
import { getEmployees } from "../slice";

export const useEmployees = () => {
  const { error, loading, employeeItems } = useSelector(
    (state: RootState) => state.employee,
  );

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch]);

  return {
    error,
    loading,
    employeeItems,
  };
};
