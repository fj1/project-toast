import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({children}) {
  const [allToasts, setAllToasts] = React.useState([]);

  React.useEffect(() => {
    function handleEscapeToDismissToasts(event) {
      if (event.code === 'Escape') {
        setAllToasts([]);
      }
    }

    window.addEventListener('keydown', handleEscapeToDismissToasts);

    return () => {
      window.removeEventListener('keydown', handleEscapeToDismissToasts);
    }
  }, []);

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
