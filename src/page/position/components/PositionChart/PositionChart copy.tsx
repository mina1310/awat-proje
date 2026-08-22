import { Box } from "@mui/material";
import { memo } from "react";

import type { DataPositions, TreeNode } from "../../position.type";
import styles from "./PositionChart.module.scss";
import type { EmployeeData } from "../../../employee/employee.type";
import type { PositionWithEmployee } from "../../../position/utils/getEmployeePosition";

export type PositionChartProps<T extends DataPositions> = {
  nodes: TreeNode<T>[];
  employeeData?: Map<number, EmployeeData>;
};

const isPositionWithEmployee = (
  node: DataPositions,
): node is PositionWithEmployee => {
  return "employees" in node;
};

export const PositionChart = memo(
  <T extends DataPositions>({ nodes, employeeData }: PositionChartProps<T>) => {
    return (
      <Box component="ul" className={styles.tree}>
        {nodes.map(({ node, level }) => {
          const employee = isPositionWithEmployee(node)
            ? employeeData?.get(node.employees[0]?.employeeId)
            : undefined;

          return (
            <li
              key={node.id}
              className={styles.item}
              style={{
                marginRight: `${level * 40}px`,
              }}
            >
              <Box className={styles.node} title={node.title}>
                {node.title}

                {employee && (
                  <span>
                    {" - "}
                    {employee.firstName} {employee.lastName}
                  </span>
                )}
              </Box>
            </li>
          );
        })}
      </Box>
    );
  },
);
