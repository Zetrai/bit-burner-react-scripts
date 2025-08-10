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
    case 'info':
      return (
        <div
          style={{
            background: 'rgba(10, 15, 30, 0.85)',
            padding: '12px 16px',
            border: '2px solid rgba(0, 180, 255, 0.8)',
            borderRadius: '6px',
            width: 'fit-content',
            maxWidth: '80%',
            marginBottom: '5px',
            color: '#4fd4ff',
            fontWeight: 700,
            fontSize: '15px',
            fontFamily: '"Share Tech Mono", monospace',
            boxShadow: '0 0 4px rgba(0,180,255,0.5), 0 0 8px rgba(0,180,255,0.3)',
            letterSpacing: '1px',
          }}>
          {text}
        </div>
      );

    case 'success':
      return (
        <div
          style={{
            background: 'rgba(10, 20, 10, 0.85)',
            padding: '12px 16px',
            border: '2px solid rgba(0,255,140,0.8)',
            borderRadius: '6px',
            width: 'fit-content',
            maxWidth: '80%',
            marginBottom: '5px',
            color: '#00ff8c',
            fontWeight: 700,
            fontSize: '15px',
            fontFamily: '"Share Tech Mono", monospace',
            boxShadow: '0 0 4px rgba(0,255,140,0.5), 0 0 8px rgba(0,255,140,0.3)',
            letterSpacing: '1px',
          }}>
          {text}
        </div>
      );
    case 'fail':
      return (
        <div
          style={{
            background: 'rgba(74, 15, 15, 0.85)',
            padding: '14px 18px',
            border: '2px solid rgba(255, 60, 60, 0.8)',
            borderRadius: '6px',
            width: 'fit-content',
            maxWidth: '80%',
            marginBottom: '5px',
            color: '#ff4c4c',
            fontWeight: 700,
            fontSize: '15px',
            fontFamily: '"Share Tech Mono", monospace',
            boxShadow: '0 0 4px rgba(255, 60, 60, 0.5), 0 0 8px rgba(255, 60, 60, 0.3)',
            letterSpacing: '1px',
          }}>
          {text}
        </div>
      );
    case 'warning':
      return (
        <div
          style={{
            background: 'rgba(30, 20, 5, 0.85)',
            padding: '14px 18px',
            border: '2px solid rgba(255, 180, 0, 0.9)',
            borderRadius: '6px',
            width: 'fit-content',
            maxWidth: '80%',
            marginBottom: '5px',
            color: '#ffb400',
            fontWeight: 700,
            fontSize: '15px',
            fontFamily: '"Share Tech Mono", monospace',
            boxShadow: '0 0 6px rgba(255, 180, 0, 0.8), 0 0 12px rgba(255, 180, 0, 0.4)',
            letterSpacing: '1px',
            textTransform: 'uppercase',
          }}>
          ⚠ {text}
        </div>
      );
    case 'error':
      return (
        <div
          style={{
            background: 'rgba(30, 0, 0, 0.85)',
            padding: '14px 18px',
            border: '2px solid rgba(255, 0, 80, 0.9)',
            borderRadius: '6px',
            width: 'fit-content',
            maxWidth: '80%',
            marginBottom: '5px',
            color: '#ff2050',
            fontWeight: 700,
            fontSize: '15px',
            fontFamily: '"Share Tech Mono", monospace',
            boxShadow: '0 0 5px rgba(255, 0, 80, 0.7), 0 0 10px rgba(255, 0, 80, 0.5)',
            letterSpacing: '1px',
            textShadow: '0 0 4px rgba(255, 0, 80, 0.7)',
          }}>
          ⚠ {text}
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
