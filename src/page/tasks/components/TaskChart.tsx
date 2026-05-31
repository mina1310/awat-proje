import type { TaskNode } from "../task.type";
const TaskChart: React.FC<{ nodes: TaskNode[] }> = ({ nodes }) => {
  const renderRows = (nodes: TaskNode[]) => {
    return nodes.map((node: TaskNode) => (
      <li key={node.id} style={{ marginBottom: "8px" }}>
        <div
          style={{
            padding: "10px",
            backgroundColor:
              node.status === "انجام شده" ? "#e8f5e9" : "#fff3e0",
            borderRadius: "8px",
            border: "1px solid #e0e0e0",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              backgroundColor: "#688cb1",
              color: "white",
              padding: "4px 8px",
              borderRadius: "4px",
              minWidth: "50px",
              textAlign: "center",
            }}
          >
            {node.id}
          </span>
          <span style={{ flex: 1 }}>{node.title}</span>

          <span
            style={{
              color: node.status === "انجام شده" ? "green" : "orange",
              fontSize: "13px",
              minWidth: "100px",
              textAlign: "center",
            }}
          >
            {node.status === "انجام شده" ? "✅ انجام شده" : "⏳ انجام نشده"}
          </span>

          <span
            style={{
              color: "#555",
              minWidth: "150px",
              textAlign: "center",
            }}
          >
            {node.done_date
              ? new Date(node.done_date).toLocaleDateString("fa-IR")
              : "-"}
          </span>
          <span
            style={{
              color: "#555",
              minWidth: "150px",
              textAlign: "center",
            }}
          >
            {node.assignee}
          </span>
        </div>

        {node.children && node.children.length > 0 && (
          <div style={{ marginRight: "10px", marginTop: "8px" }}>
            {renderRows(node.children)}
          </div>
        )}
      </li>
    ));
  };

  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          padding: "10px",
          marginBottom: "16px",
          backgroundColor: "#f5f5f5",
          borderRadius: "8px",
          border: "1px solid #e0e0e0",
          fontFamily: "sans-serif",
          direction: "rtl",
          fontWeight: "bold",
          fontSize: "14px",
          flexWrap: "wrap",
        }}
      >
        <span style={{ minWidth: "50px", textAlign: "center" }}>شناسه</span>
        <span style={{ flex: 1 }}>وظیفه</span>
        <span style={{ minWidth: "100px", textAlign: "center" }}>وضعیت</span>
        <span style={{ minWidth: "150px", textAlign: "center" }}>
          تاریخ انجام
        </span>
        <span style={{ minWidth: "150px", textAlign: "center" }}>مسئول</span>
      </div>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          fontFamily: "sans-serif",
          direction: "rtl",
          fontWeight: "bold",
          fontSize: "12px",
        }}
      >
        {renderRows(nodes)}
      </ul>
    </div>
  );
};

export default TaskChart;
