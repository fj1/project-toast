import React from 'react';

import useEscapeKey from '../../hooks/useEscapeKey';

export const ToastContext = React.createContext();

function ToastProvider({children}) {
  const [allToasts, setAllToasts] = React.useState([]);

  useEscapeKey(() => {
    setAllToasts([]);
  });

  function createToast(message, variant) {
    setAllToasts([
      ...allToasts,
      {
        id: crypto.randomUUID(),
        message,
        variant,
      },
    ]);
  }

  function removeToast(toastId) {
    const updatedToasts = allToasts.filter(({ id }) => id !== toastId);

    setAllToasts(updatedToasts);
  }

  const contextValue = {
    allToasts,
    createToast,
    removeToast,
  };

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
