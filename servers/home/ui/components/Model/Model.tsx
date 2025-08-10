import React, { useState, useEffect } from 'react';

interface ButtonProps {
  text: string;
  variant: string;
  waitFor?: number;
  children?: React.ReactNode;
}

export function Model({ text, variant, waitFor, children }: ButtonProps) {
  const cyberpunkBorder = '2px solid rgba(0,255,200,0.8)';
  const neonGlow = '0 0 4px rgba(0,255,200,0.5), 0 0 8px rgba(0,255,200,0.3)';

  switch (variant) {
    case 'normal':
      return (
        <div
          style={{
            background: 'rgba(10, 10, 20, 0.85)',
            padding: '14px 18px',
            border: cyberpunkBorder,
            borderRadius: '6px',
            width: 'fit-content',
            maxWidth: '80%',
            marginBottom: '5px',
            color: '#0fffc3',
            fontWeight: 700,
            fontSize: '15px',
            fontFamily: '"Share Tech Mono", monospace',
            boxShadow: neonGlow,
            letterSpacing: '1px',
          }}>
          {text}
        </div>
      );
    case 'loader':
      const [bars, setBars] = useState('');
      const [visible, setVisible] = useState(true);

      useEffect(() => {
        let elapsed = 0;
        const interval = setInterval(() => {
          elapsed += 300;
          setBars((prev) => prev + '|');
          if (elapsed >= waitFor) {
            clearInterval(interval);
            setTimeout(() => setVisible(false), 500);
          }
        }, 300);
        return () => clearInterval(interval);
      }, [waitFor]);

      if (!visible) return null; // remove loader completely

      return (
        <>
          <div
            style={{
              background: 'rgba(5, 5, 15, 0.85)',
              padding: '8px 14px',
              border: cyberpunkBorder,
              borderRadius: '6px',
              minWidth: '200px',
              textAlign: 'center',
              color: '#0fffc3',
              fontFamily: '"Share Tech Mono", monospace',
              fontSize: '14px',
              boxShadow: neonGlow,
              position: 'fixed',
              bottom: '50px',
              right: '20px',
              letterSpacing: '1px',
            }}>
            {text} {bars}
          </div>
        </>
      );
    default:
      return <div style={{ background: 'red', padding: '20px', border: '2px', borderRadius: '10px' }}>{`[ERROR] Unknown Variant: ${variant}`}</div>;
  }
}
