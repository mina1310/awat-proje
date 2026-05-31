import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../store";
import { getTasks } from "../slice";
import buildHierarchy from "../../../utils/buildHierarchy";
import type { DataTasks } from "../task.type";

const useTasks = () => {
  const { tasks, error, loading } = useSelector(
    (state: RootState) => state.tasks,
  );
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);
  console.log("Original tasks:", tasks);
  return {
    tasks: useMemo(() => buildHierarchy<DataTasks>(tasks), [tasks]),
    error,
    loading,
  };
};
export default useTasks;
