import { EmployeePositionChart } from "./components/EmployeePositionChart";
import { usePersonnelChart } from "./hooks/usePersonnelChart";

const EmployeePositionPage = () => {
  const { personnelChartData, error, loading, employeeItems } =
    usePersonnelChart();
  if (loading.employee || loading.position) return <div>loading...</div>;
  if (error.employee || error.position) {
    return (
      <div>
        {error.employee && <p>employee error is:{error.employee}</p>}
        {error.position && <p>position error is:{error.position}</p>}
      </div>
    );
  }

  return (
    <EmployeePositionChart
      nodes={personnelChartData}
      employees={employeeItems}
    />
  );
};
export default EmployeePositionPage;
