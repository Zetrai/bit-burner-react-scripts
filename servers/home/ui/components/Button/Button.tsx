import React, { useState } from 'react';

import { styles } from './Button.styles';

interface ButtonProps {
  variant: keyof typeof styles;
  onClick?: () => void;
  children?: React.ReactNode;
}

export function Button({ variant, onClick, children }: ButtonProps) {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <button
      style={{
        ...styles[variant],
        ...(isHovering && styles[`${variant}Hover` as keyof typeof styles]),
      }}
      onClick={onClick}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}>
      {children}
    </button>
  );
}
