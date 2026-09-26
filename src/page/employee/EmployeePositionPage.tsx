import { PositionChart } from "../position/components/PositionChart/PositionChart";
import { usePersonnelChart } from "./hooks/usePersonnelChart";

const EmployeePositionPage = () => {
  const { personnelChartData, error, loading, handleFiltered, isFiltered } =
    usePersonnelChart();
  if (loading.employee || loading.position) return <div>loading...</div>;
  if (error.employee || error.position) {
    return (
      <div>
        {error.employee && error.position && (
          <p>{`error is:${error.employee} and ${error.position}`}</p>
        )}
        {error.employee && <p>employee error is:{error.employee}</p>}
        {error.position && <p>position error is:{error.position}</p>}
      </div>
    );
  }

  return (
    <PositionChart
      nodes={personnelChartData}
      onFilter={handleFiltered}
      isFiltered={isFiltered}
    />
  );
};
export default EmployeePositionPage;
