import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../store";
import { useEffect, useMemo } from "react";
import { getUsers } from "../slice";
import type { UserData } from "../user.type";

export const useUser = () => {
  const { error, loading, userItems } = useSelector(
    (state: RootState) => state.user,
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const userMap = useMemo(() => {
    const map = new Map<number, UserData>();

    for (const item of userItems) {
      map.set(item.id, item);
    }

    return map;
  }, [userItems]);

  const getUserById = (id: number): UserData | undefined => {
    return userMap.get(id);
  };

  return {
    error,
    loading,
    userItems,
    getUserById,
  };
};
