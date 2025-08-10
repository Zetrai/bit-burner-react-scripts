import React, { useState, useEffect } from 'react';
import { styles } from './Logger.styles';

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
      return <div style={styles.logInfo}>{text}</div>;

    case 'success':
      return <div style={styles.logSuccess}>{text}</div>;
    case 'fail':
      return <div style={styles.logFail}>{text}</div>;
    case 'warning':
      return <div style={styles.logWarning}>⚠ {text}</div>;
    case 'error':
      return <div style={styles.logError}>⚠ {text}</div>;
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
          <div style={styles.logLoader}>
            {text} {bars}
          </div>
        </>
      );

    default:
      return <div style={{ background: 'red', padding: '20px', border: '2px', borderRadius: '10px' }}>{`[ERROR] Unknown Variant: ${variant}`}</div>;
  }
}
