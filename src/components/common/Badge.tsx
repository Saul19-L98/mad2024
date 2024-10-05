// components/Badge.js
import React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={` rounded-full px-4 py-1 ${className}`} {...props}>
      {children}
    </div>
  );
};
