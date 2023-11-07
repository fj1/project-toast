import React from 'react';

import Toast from '../Toast';
import { ToastContext } from '../ToastProvider';

import styles from './ToastShelf.module.css';

function ToastShelf() {
  const {allToasts} = React.useContext(ToastContext);

  return (
    <ol className={styles.wrapper} role='region' aria-live='polite' aria-label='Notification'>
      {allToasts.map(({ id, message, variant }) => {
        return (
          <li className={styles.toastWrapper} key={id}>
            <Toast
              id={id}
              variant={variant}
            >
              {message}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
