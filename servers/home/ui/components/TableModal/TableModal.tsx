import React, { useState } from 'react';
import { Button } from '@/servers/home/ui/components/Button/Button';
import { styles } from './TableModal.styles';

interface ServerInfoProps {
  info: any;
  variant: string;
  name: string;
  value: string;
  heading: string;
  waitFor?: number; // optional timeout for auto-close
  children?: React.ReactNode;
}

export function TableModal({ info, variant, name, value, heading, waitFor, children }: ServerInfoProps) {
  const [visible, setVisible] = useState(true);

  // Optional: auto-close after waitFor ms
  React.useEffect(() => {
    if (waitFor) {
      const timer = setTimeout(() => setVisible(false), waitFor);
      return () => clearTimeout(timer);
    }
  }, [waitFor]);

  const closeModal = () => {
    setVisible(false);
  };

  if (!visible) return null; // completely removes modal from DOM

  return (
    <div style={styles.container}>
      <Button variant='crossBtn' onClick={closeModal}>
        ✕
      </Button>

      <div style={styles.modalContent}>
        <div style={styles.header}>
          <h2>{heading}</h2>
        </div>

        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ textAlign: 'left', borderBottom: '1px solid #ccc', padding: '8px' }}>{name}</th>
              <th style={{ textAlign: 'left', borderBottom: '1px solid #ccc', padding: '8px' }}>{value}</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(info).map(([key, value]) => (
              <tr key={key} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '8px', fontWeight: 'bold' }}>{key}</td>
                <td style={{ padding: '8px' }}>{typeof value === 'object' ? JSON.stringify(value) : value.toString()}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {children}
      </div>
    </div>
  );
}
