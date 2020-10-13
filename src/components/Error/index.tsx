import React from "react";
import s from "./style.scss";
import { ErrorIcon } from "../icons/ErrorIcon";

interface ErrorProps {
  label?: string;
}

export const Error = ({ label }: ErrorProps) => {
  return (
    <div className={s.error}>
      <h2>
        {label ||
          "Something went wrong, please check your connection or reload the page."}
      </h2>
      <ErrorIcon />
    </div>
  );
};
