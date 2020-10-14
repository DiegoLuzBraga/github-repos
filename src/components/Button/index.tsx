import React from "react";
import { LoadingSpinner } from "../icons/LoadingSpinner";
import s from "./style.scss";

interface ButtonProps {
  label: string;
  onClick: () => void;
  isLoading?: boolean;
  className?: string;
}

export const Button = ({
  onClick,
  label,
  isLoading,
  className
}: ButtonProps) => {
  return (
    <button
      type="submit"
      className={`${s.button} ${className}`}
      onClick={e => {
        e.preventDefault();
        if (!isLoading) {
          onClick();
        }
      }}
    >
      {isLoading ? <LoadingSpinner className={s.spinning} /> : label}
    </button>
  );
};
