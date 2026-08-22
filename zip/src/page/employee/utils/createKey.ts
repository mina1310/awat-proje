export const createKey = (id: number, slot: number[] | null): string => {
  return `${id}-${slot?.join("-") ?? "space"}`;
};
