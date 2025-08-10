import { CSSProperties } from 'react';

export const styles: Record<string, CSSProperties> = {
  container: {
    background: 'rgba(10,15,30,0.95)',
    border: '2px solid rgba(0,255,200,0.6)',
    padding: '20px',
    borderRadius: '8px',
    width: '400px',
    boxShadow: '0 0 12px rgba(0,255,200,0.3)',
    position: 'relative',
    minHeight: '200px',
  },
  header: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  content: {
    marginTop: '10px',
    marginBottom: '20px',
  },
  footer: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '10px',
  },
};
