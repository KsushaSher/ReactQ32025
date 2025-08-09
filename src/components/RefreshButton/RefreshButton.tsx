import { useState } from 'react';

const RefreshButton = () => {
  const [hasError, setHasError] = useState<boolean>(false);

  const handleClick = () => {
    setHasError(true);
  };

  if (hasError) {
    throw new Error('Test error from button "Throw error"');
  }

  return (
    <button
      className="button refresh-btn"
      onClick={handleClick}
      data-testid="refresh-boundary"
    >
      Refresh
    </button>
  );
};

export default RefreshButton;
