import React, { useState } from 'react';
import Toast from './toast';

const Toaster = () => {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type) => {
    const id = Date.now();
    setToasts([...toasts, { id, message, type }]);
    setTimeout(() => removeToast(id), 3000); // Auto-dismiss after 3 seconds
  };

  const removeToast = (id) => {
    setToasts(toasts.filter((toast) => toast.id !== id));
  };

  return (
    <div style={{ position: 'fixed', top: '10px', right: '10px' }}>
      {toasts.map((toast) => (
        <Toast key={toast.id} message={toast.message} type={toast.type} />
      ))}
      <button onClick={() => addToast('This is a success!', 'success')}>Show Success</button>
    </div>
  );
};

export default Toaster;
