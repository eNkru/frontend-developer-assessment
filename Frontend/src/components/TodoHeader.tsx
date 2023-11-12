import React from "react";

interface TodoHeaderProps {
    title: string
}
export const TodoHeader = ({ title }: TodoHeaderProps) => {
  return (
      <h1 role="todoheader">{title}</h1>
  )
}