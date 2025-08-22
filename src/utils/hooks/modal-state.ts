import { useState } from 'react';

type Return = [boolean, () => void];

const useModalState = (): Return => {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return [isShowing, toggle];
};

export default useModalState;
