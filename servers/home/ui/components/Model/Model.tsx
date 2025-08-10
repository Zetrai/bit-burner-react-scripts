import React from 'react';

interface ButtonProps {
  text: string;
  variant: string;
  children?: React.ReactNode;
}

export function Model({ text, variant, children }: ButtonProps) {
  switch (variant) {
    case 'normal':
      return (
        <div
          style={{
            background: 'purple',
            padding: '20px',
            border: '4px solid #fff',
            borderRadius: '10px',
            width: '50%',
            marginBottom: '5px',
          }}>
          {text}
        </div>
      );
    default:
      return <div style={{ background: 'red', padding: '20px', border: '2px', borderRadius: '10px' }}>{`[ERROR] Unknown Variant: ${variant}`}</div>;
  }
}
