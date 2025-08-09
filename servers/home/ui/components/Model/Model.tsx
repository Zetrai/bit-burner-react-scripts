import React from 'react';

interface ButtonProps {
  text: string;
  children?: React.ReactNode;
}

export function Model({ text, children }: ButtonProps) {
  return <div style={{ background: 'purple', padding: '20px', border: '2px', borderRadius: '10px' }}>{text}</div>;
}
