import usePositions from "../position/hooks/usePositions";
import { useMemo } from "react";

import EmployeePositionChart from "./components/EmployeePositionChart";
import filteredPosition from "../../utils/filteredPosition";

const EmployeePositionPage = () => {
  const { positions, loading, error } = usePositions();
  const result = useMemo(() => filteredPosition(positions), [positions]);
  if (loading) return <div>loading...</div>;
  if (error) return <div>{error}</div>;

  return <EmployeePositionChart nodes={result} />;
};
export default EmployeePositionPage;
