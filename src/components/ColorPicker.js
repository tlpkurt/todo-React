
import React from 'react';

const ColorPicker = ({ color, onChange }) => {
 


  return (
    <div className="color-picker">
      <label htmlFor="primary-color-picker">Select Primary Color:</label>
      <input
        type="color"
        id="primary-color-picker"
        value={color}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
    
  );
 
};
export default ColorPicker;
