import PositionChart from "./components/PositionChart/PositionChart";
import usePositions from "./hooks/usePositions";

const PositionPage = () => {
  const { positions, loading, error } = usePositions();
  if (loading) return <div>loading...</div>;
  if (error) return <div>{error}</div>;

  return <PositionChart nodes={positions} />;
};
export default PositionPage;
