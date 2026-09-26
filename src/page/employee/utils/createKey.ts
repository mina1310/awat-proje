export const createKey = (positionId: number, slot: number[]): string => {
  return `${positionId}-${slot.join("-")}`;
};
