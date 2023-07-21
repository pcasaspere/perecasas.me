import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/es";

dayjs.extend(relativeTime);
dayjs.locale('es')

export const useDateToLocalString = (date) =>
  dayjs(date).format("dddd, D MMMM, YYYY");

export const useDateFromNow = (date) => dayjs(date).fromNow();
