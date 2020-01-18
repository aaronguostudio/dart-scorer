import React from 'react';
import { InputNumber } from 'antd';

export default ({ label, value = 0, isDisabled }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', margin: 16 }}>
      <span style={{ marginRight: 8 }}>{label}:</span>
      <InputNumber
        style={{ width: '100%' }}
        value={value}
        disabled={isDisabled}
      />
    </div>
  );
};
