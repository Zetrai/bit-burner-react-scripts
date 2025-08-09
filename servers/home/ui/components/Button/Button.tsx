import React, { useState } from 'react';

interface ButtonProps {
  label?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

export function Button({ label, onClick, children }: ButtonProps) {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
