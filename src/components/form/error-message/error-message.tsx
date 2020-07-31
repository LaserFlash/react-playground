import React from 'react';
import './error-message.scss';

interface Props {
  children?: React.ReactNode;
}

export const ErrorMessage: React.FC<Props> = (props) => {
  return (
    <div className="error-message-wrapper">
      <div className="error-message">{props.children}</div>
    </div>
  );
};

export default ErrorMessage;
