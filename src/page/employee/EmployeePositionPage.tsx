import usePositions from "../position/hooks/usePositions";
import { useMemo } from "react";

import filteredPosition from "../../utils/filteredPosition";
import EmployeePositionChart from "./components/EmployeePositionChart/EmployeePositionChart";
import { useEmployees } from "./hooks/useEmployees";

const EmployeePositionPage = () => {
  const result = useMemo(() => filteredPosition(positions), [positions]);
  if (loading) return <div>loading...</div>;
  if (error) return <div>{error}</div>;

  return <EmployeePositionChart nodes={result} />;
};
export default EmployeePositionPage;
