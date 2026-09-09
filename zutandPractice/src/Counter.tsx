import React, { useState } from 'react';
import { useCounterStore } from './UseCounter';

export const Counter: React.FC = () => {
  const [customValue, setCustomValue] = useState<number>(5);


  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const incrementByAmount = useCounterStore((state) => state.incrementByAmount);
  const reset = useCounterStore((state) => state.reset);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
      <h1>Zustand Counter App</h1>
      
      {/* Dynamic State display */}
      <h2 style={{ fontSize: '48px', color: count < 0 ? 'red' : 'green' }}>
        {count}
      </h2>

      {/* Control Buttons */}
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '20px' }}>
        <button onClick={decrement} style={buttonStyle}>- Decrease</button>
        <button onClick={reset} style={{ ...buttonStyle, backgroundColor: '#ff4d4d' }}>Reset</button>
        <button onClick={increment} style={buttonStyle}>+ Increase</button>
      </div>

      {/* Custom Amount Addition */}
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <input
          type="number"
          value={customValue}
          onChange={(e) => setCustomValue(Number(e.target.value))}
          style={{ width: '60px', padding: '5px'}}
        />
        <button 
          onClick={() => incrementByAmount(customValue)} 
          style={{ ...buttonStyle, backgroundColor: '#28a745' }}
        >
          Add {customValue}
        </button>
      </div>
    </div>
  );
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
  backgroundColor: '#0070f3',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
};