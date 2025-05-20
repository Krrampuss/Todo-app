import React from 'react';

type Props = {
  errorMessage: string;
};

export const ErrorMes: React.FC<Props> = ({ errorMessage }) => {
  return (
    <div
      data-cy="ErrorNotification"
      className={
        errorMessage
          ? 'notification is-danger is-light has-text-weight-normal'
          : 'hidden'
      }
    ></div>
  );
};
