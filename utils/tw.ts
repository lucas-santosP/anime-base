import { twMerge } from "tailwind-merge";
import classNames from "classnames";

export function tw(...args: classNames.ArgumentArray): string {
  return twMerge(classNames(args));
}
