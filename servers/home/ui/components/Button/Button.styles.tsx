import { CSSProperties } from 'react';

export const styles: Record<string, CSSProperties> = {
  crossBtn: {
    padding: '6px 10px',
    background: 'rgba(0,0,0,0.6)',
    border: '2px solid rgba(0,255,200,0.8)',
    color: '#0fffc3',
    borderRadius: '4px',
    cursor: 'pointer',
    fontFamily: '"Share Tech Mono", monospace',
    transition: 'all 0.2s ease-in-out',
    position: 'absolute',
    top: '10px',
    right: '10px',
  },
  crossBtnHover: {
    background: 'rgba(0,255,200,0.1)',
    boxShadow: '0 0 4px rgba(0,255,200,0.5), 0 0 8px rgba(0,255,200,0.3)',
  },

  successBtn: {
    padding: '6px 12px',
    background: 'rgba(10, 20, 10, 0.85)',
    border: '2px solid rgba(0,255,140,0.8)',
    color: '#00ff8c',
    borderRadius: '4px',
    cursor: 'pointer',
    fontFamily: '"Share Tech Mono", monospace',
    transition: 'all 0.2s ease-in-out',
  },
  successBtnHover: {
    background: 'rgba(0,255,140,0.1)',
    boxShadow: '0 0 4px rgba(0,255,140,0.5), 0 0 8px rgba(0,255,140,0.3)',
  },
};
