import { useDebounce } from "use-debounce";
import { useQuery } from "@tanstack/react-query";
import { searchByText } from "@/api";
import { useEffect } from "react";

export const useFoodSearch = (query: string) => {
  const [debouncedQuery] = useDebounce(query, 500);

  return useQuery({
    queryKey: ["foods", debouncedQuery],
    queryFn: () => searchByText(debouncedQuery),
    enabled: !!debouncedQuery.length,
  });
};
