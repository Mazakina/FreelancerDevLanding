import { HTMLAttributes } from "react";

interface DivisionProps extends HTMLAttributes<HTMLDivElement> {
  width?: string;
  height?: string;
  color?: string;
  marginTop?: string;
  marginRight?: string;
  marginBottom?: string;
  marginLeft?: string;
}

export default function Division({
  width = "98%",
  height = "2px",
  color,
  marginLeft = "initial",
  marginTop = "2.5rem",
  marginRight = "initial",
  marginBottom = "initial",
  ...rest
}: DivisionProps) {
  return (
    <div
      className={
        color
          ? `box-shadow-[1px_0px_5px_2px_${color}55] bg-${color}`
          : "[box-shadow:0px_3px_5px_2px_theme(colors.c-transparent-green)] bg-c-green500"
      }
      style={{
        height,
        width,
        borderRadius: "3px",
        marginTop,
        marginLeft,
        marginRight,
        marginBottom,
        ...rest,
      }}
    />
  );
}
