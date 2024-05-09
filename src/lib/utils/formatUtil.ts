import { Optional } from "../types/optional";

export function formatDate(date: Optional<string>) {
  if (date) {
    return new Date(date).toISOString().split("T")[0];
  }
  return "";
}
