import { useState } from 'react';
import Modal from '../Modal';
import {
  setSelectedColumns,
  type AdditionalColumns,
} from '../../store/slices/uiSlice';
import { useAppDispatch } from '../../store/hooks';

const AdditionalParameters = () => {
  const [click, setClick] = useState(false);
  const dispatch = useAppDispatch();

  const handleOpen = () => setClick(true);
  const handleClose = (selectedColumns?: AdditionalColumns[]) => {
    setClick(false);

    if (selectedColumns) dispatch(setSelectedColumns(selectedColumns));
  };

  return (
    <>
      <button className={'add-btn'} onClick={handleOpen}>
        add parameters
      </button>
      {click && <Modal onClose={handleClose} />}
    </>
  );
};

export default AdditionalParameters;
