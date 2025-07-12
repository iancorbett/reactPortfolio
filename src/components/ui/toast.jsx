import React from 'react';

const Toast = ({ message, type }) => {
  const toastStyles = {
    success: { backgroundColor: 'green', color: 'white' },
    error: { backgroundColor: 'red', color: 'white' },
    warning: { backgroundColor: 'orange', color: 'black' },
  };

  return (
    <div style={{ ...toastStyles[type], padding: '10px', borderRadius: '5px', margin: '10px' }}>
      {message}
    </div>
  );
};

export default Toast;
