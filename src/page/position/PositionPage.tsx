import { PositionChart } from "./components/PositionChart";
import useHierarchyPositions from "./hooks/useHierarchyPositions";

const PositionPage = () => {
  const { positions, loading, error } = useHierarchyPositions();
  if (loading) return <div>loading...</div>;
  if (error) return <div>{error}</div>;

  return <PositionChart nodes={positions} />;
};
export default PositionPage;
