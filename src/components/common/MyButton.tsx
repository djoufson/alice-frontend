import React from "react";

export default function MyButton({
  onClick,
  className,
  children,
}: {
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}
