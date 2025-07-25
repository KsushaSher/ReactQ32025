import React, { useState } from 'react';

const ErrorButton: React.FC = () => {
  const [hasError, setHasError] = useState<boolean>(false);

  const handleClick = () => {
    setHasError(true);
  };

  if (hasError) {
    throw new Error('Test error from button "Throw error"');
  }

  return (
    <button
      className="button error"
      onClick={handleClick}
      data-testid="error-boundary"
    >
      Throw error
    </button>
  );
};

export default ErrorButton;
