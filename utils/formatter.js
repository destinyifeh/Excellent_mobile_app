import { Alert } from "react-native";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
export function formatDate(date) {
  return dayjs(date).fromNow();
}

export const todayDate = dayjs().format("dddd");
export const footerYear = dayjs().format("YYYY");

export function ValidateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  Alert.alert("Error", "You have entered an invalid email address!");
  return false;
}
