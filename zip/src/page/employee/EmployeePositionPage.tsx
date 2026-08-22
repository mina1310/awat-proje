import { EmployeePositionChart } from "./components/EmployeePositionChart";
import { usePersonnelChart } from "./hooks/usePersonnelChart";

const EmployeePositionPage = () => {
  const { personnelChartData, error, loading, employeeMap } =
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
    <EmployeePositionChart
      nodes={personnelChartData}
      employeeMap={employeeMap}
    />
  );
};
export default EmployeePositionPage;
