import React from 'react';

function useEscapeKey(callback) {
  React.useEffect(() => {
    function handleEscapeToDismissToasts(event) {
      if (event.code === "Escape") {
        callback();
      }
    }

    window.addEventListener("keydown", handleEscapeToDismissToasts);

    return () => {
      window.removeEventListener("keydown", handleEscapeToDismissToasts);
    };
  }, [callback]);
}

export default useEscapeKey;
