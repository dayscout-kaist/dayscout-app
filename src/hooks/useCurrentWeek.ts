import { useMemo } from "react";

export const useCurrentWeek = () => {
  const today = new Date();

  return {
    today,
    weekdays: useMemo(
      () =>
        Array.from({ length: 7 }).map((_, i) => {
          const time =
            today.getTime() + (i - today.getDay()) * 24 * 60 * 60 * 1000;
          return new Date(time);
        }),
      [today],
    ),
  };
};
