import { format, parseISO } from "date-fns";
import { id } from "date-fns/locale";

export const getToday = (date: Date): string => {
  return format(date, "EEEE, dd MMMM yyyy", { locale: id });
};

export const getDayName = (day: string): string => {
  return format(parseISO(day), "EEEE", { locale: id });
};

export const getTimeOfDay = (time: string): "day" | "night" | null => {
  if (time.toLowerCase() === "d") return "day";
  if (time.toLowerCase() === "n") return "night";
  return null;
};
