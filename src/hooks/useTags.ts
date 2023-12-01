import { getTags } from "@/api/tag";
import { useQuery } from "@tanstack/react-query";

export const useTags = () =>
  useQuery({ queryKey: ["tags"], queryFn: () => getTags() });
