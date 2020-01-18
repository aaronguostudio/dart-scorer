import React, { useState } from 'react';
import { Button, InputNumber } from 'antd';

export default ({ onAddScore }) => {
  const [score, setScore] = useState(0);

  return (
    <div style={{ display: 'flex' }}>
      <InputNumber
        style={{ width: '100%' }}
        value={score}
        onChange={value => setScore(value)}
      />
      <Button
        type="primary"
        onClick={() => {
          onAddScore(score);
          setScore(0);
        }}
      >
        +
      </Button>
    </div>
  );
};
