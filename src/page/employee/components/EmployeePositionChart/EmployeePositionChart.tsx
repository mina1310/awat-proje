import { Box } from "@mui/material";
import { memo } from "react";

import styles from "./EmployeePositionChart.module.scss";

import type { EmployeeData } from "../../employee.type";
import type { DataList } from "../../../../utils/buildHierarchy";
import type { PositionWithEmployee } from "../../../position/utils/getEmployeePosition";

type EmployeePositionChartProps = {
  nodes: DataList<PositionWithEmployee>[];
  employeeMap: Map<number, EmployeeData>;
};

export const EmployeePositionChart = memo(
  ({ nodes, employeeMap }: EmployeePositionChartProps) => {
    return (
      <Box component="ul" className={styles.tree}>
        {nodes.map((node) => {
          const employeeId = node.employees?.[0]?.employeeId;

          const employee =
            employeeId !== undefined ? employeeMap.get(employeeId) : undefined;

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
                  employeeMap={employeeMap}
                />
              )}
            </li>
          );
        })}
      </Box>
    );
  },
);
