import { useState } from 'react';

const ErrorButton = () => {
  const [hasError, setHasError] = useState<boolean>(false);

  const handleClick = () => {
    setHasError(true);
  };

  if (hasError) {
    throw new Error('Test error from button "Throw error"');
  }

  return (
    <button
      className="button error-btn"
      onClick={handleClick}
      data-testid="error-boundary"
    >
      Throw error
    </button>
  );
};

export default ErrorButton;
