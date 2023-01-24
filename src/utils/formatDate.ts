const LOCALE = "en-US";

const optionsDateAndTime: Intl.DateTimeFormatOptions = {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
};

const optionsDate: Intl.DateTimeFormatOptions = {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
};

type IOptions = {
  dateOnly?: boolean;
};

export function formatDate(date: string, options?: IOptions): string {
  if (!date) return "";
  if (options?.dateOnly) return new Date(date).toLocaleDateString(LOCALE, optionsDate);
  else return new Date(date).toLocaleString(LOCALE, optionsDateAndTime);
}
