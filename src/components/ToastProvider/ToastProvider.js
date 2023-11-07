import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({children}) {
  const [allToasts, setAllToasts] = React.useState([]);

  function removeToast(toastId) {
    const updatedToasts = allToasts.filter(({ id }) => id !== toastId);

    setAllToasts(updatedToasts);
  }

  const contextValue = {
    allToasts,
    setAllToasts,
    removeToast,
  };

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
