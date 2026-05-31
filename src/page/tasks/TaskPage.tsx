import TaskChart from "./components/TaskChart";
import useTasks from "./hooks/useTasks";
const TaskPage: React.FC = () => {
  const { tasks, error, loading } = useTasks();
  if (loading) return <div>loading...</div>;
  if (error) return <div>{error}</div>;
  return <TaskChart nodes={tasks} />;
};
export default TaskPage;
