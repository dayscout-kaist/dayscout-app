import { useMemo } from "react";

export const useCurrentWeek = () => {
  const today = new Date();

  return {
    today: today.getDate(),
    weekdays: useMemo(
      () =>
        Array.from({ length: 7 }).map(
          (_, i) => today.getDate() - today.getDay() + i,
        ),
      [today],
    ),
  };
};
