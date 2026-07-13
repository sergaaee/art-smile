"use client";

import type { ReactNode } from "react";

export default function NoCopy({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`select-none ${className ?? ""}`}
      onCopy={(event) => event.preventDefault()}
      onContextMenu={(event) => event.preventDefault()}
    >
      {children}
    </div>
  );
}
