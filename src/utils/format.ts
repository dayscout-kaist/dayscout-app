export const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr);
  const hour = date.getHours();
  const min = String(date.getMinutes()).padStart(2, "0");
  return `${hour < 12 ? "오전" : "오후"} ${((hour + 11) % 12) + 1}:${min}`;
};
