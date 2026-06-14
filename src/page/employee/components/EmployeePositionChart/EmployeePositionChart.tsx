// import { Box } from "@mui/material";
// import type { DataList } from "../../../utils/buildHierarchy";
// import type { DataPositions, PositionNode } from "../../position/position.type";
// import { memo } from "react";

// const EmployeePositionChart = memo(({ nodes }: { nodes: PositionNode[] }) => {
//   return (
//     <Box
//       component="ul"
//       sx={{
//         direction: "rtl",
//         listStyle: "none",
//         m: 0,
//         mt: 1,
//         p: 0,
//         "& ul": {
//           listStyle: "none",
//           mr: 4,
//           borderRight: "1px dashed #ccc",
//         },
//         "& li": {
//           display: "flex",
//           alignItems: "flex-start",
//           position: "relative",
//           mb: 1,
//           listStyle: "none",
//           "&::before": {
//             content: '""',
//             position: "absolute",
//             right: -10,
//             top: 20,
//             width: 5,
//             height: 1,
//             bgcolor: "#ccc",
//           },
//         },
//       }}
//     >
//       {nodes.map((node: DataList<DataPositions>) => {
//         const displayText =
//           node.employees.length > 0
//             ? `${node.title} (${node.employees[0].firstName} ${node.employees[0].lastName})`
//             : node.title;

//         return (
//           <li key={node.id}>
//             <Box
//               sx={{
//                 width: 180,
//                 minWidth: 180,
//                 maxWidth: 180,
//                 py: 0.6,
//                 px: 1,
//                 borderRadius: 1.5,
//                 border: "1px solid #ddd",
//                 bgcolor: "#fff",
//                 fontSize: "0.85rem",
//                 textAlign: "center",
//                 whiteSpace: "nowrap",
//                 overflow: "hidden",
//                 textOverflow: "ellipsis",
//                 cursor: "pointer",
//                 "&:hover": {
//                   bgcolor: "#f5f5f5",
//                   borderColor: "#1976d2",
//                 },
//               }}
//               title={displayText}
//             >
//               {displayText}
//             </Box>

//             {node.children && node.children.length > 0 && (
//               <EmployeePositionChart nodes={node.children} />
//             )}
//           </li>
//         );
//       })}
//     </Box>
//   );
// });

// export default EmployeePositionChart;

// import { Box } from "@mui/material";
// import { memo, useMemo } from "react";

// import type { DataList } from "../../../../utils/buildHierarchy";

// import styles from "./EmployeePositionChart.module.scss";
// import type { PositionWithEmployee } from "../../utils/getEmployeePosition";
// import type { EmployeeData } from "../../employee.type";

// const EmployeePositionChart = memo(
//   ({
//     nodes,
//     employees,
//   }: {
//     nodes: DataList<PositionWithEmployee>[];
//     employees: EmployeeData[];
//   }) => {
//     const employeeMap = useMemo(
//       () => new Map(employees.map((employee) => [employee.id, employee])),
//       [employees],
//     );
//     return (
//       <Box component="ul" className={styles.tree}>
//         {nodes.map((node: DataList<PositionWithEmployee>) => {
//           const displayText =
//             node.employees.length > 0
//               ? `${node.title} (${node.employees[0].firstName} ${node.employees[0].lastName})`
//               : node.title;

//           return (
//             <li key={node.id}>
//               <Box className={styles.employeeNode} title={displayText}>
//                 {displayText}
//               </Box>

//               {node.children?.length > 0 && (
//                 <EmployeePositionChart nodes={node.children} />
//               )}
//             </li>
//           );
//         })}
//       </Box>
//     );
//   },
// );

// export default EmployeePositionChart;

import { Box } from "@mui/material";
import { memo, useMemo } from "react";

import type { DataList } from "../../../../utils/buildHierarchy";
import styles from "./EmployeePositionChart.module.scss";

import type { EmployeeData } from "../../employee.type";
import type { PositionWithEmployee } from "../../../position/utils/getEmployeePosition";

type EmployeePositionChartProps = {
  nodes: DataList<PositionWithEmployee>[];
  employees: EmployeeData[];
};

export const EmployeePositionChart = memo(
  ({ nodes, employees }: EmployeePositionChartProps) => {
    const employeeMap = useMemo(
      () =>
        new Map<number, EmployeeData>(
          employees.map((employee) => [employee.id, employee]),
        ),
      [employees],
    );

    return (
      <Box component="ul" className={styles.tree}>
        {nodes.map((node) => {
          const employeeId = node.employees?.[0]?.employeeId;

          const employee = employeeId ? employeeMap.get(employeeId) : undefined;

          const displayText = employee
            ? `${node.title} (${employee.firstName} ${employee.lastName})`
            : node.title;

          return (
            <li key={node.id}>
              <Box className={styles.employeeNode} title={displayText}>
                {displayText}
              </Box>

              {node.children.length > 0 && (
                <EmployeePositionChart
                  nodes={node.children}
                  employees={employees}
                />
              )}
            </li>
          );
        })}
      </Box>
    );
  },
);

EmployeePositionChart.displayName = "EmployeePositionChart";
