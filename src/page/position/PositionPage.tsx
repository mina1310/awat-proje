import { PositionChart } from "./components/PositionChart/PositionChart";
import usePositionTree from "./hooks/usePositionTree";

const PositionPage = () => {
  const { positions, loading, error, handleFiltered, isFiltered } =
    usePositionTree();
  if (loading) return <div>loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <PositionChart
      nodes={positions}
      onFilter={handleFiltered}
      isFiltered={isFiltered}
    />
  );
};
export default PositionPage;
