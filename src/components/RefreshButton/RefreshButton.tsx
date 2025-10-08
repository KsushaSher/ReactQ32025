import { useDispatch } from 'react-redux';
import { charactersApi } from '../../store/api/charactersApi';

const RefreshButton = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      charactersApi.util.invalidateTags([
        { type: 'Characters', id: 'LIST' },
        { type: 'Character', id: 'LIST' },
      ])
    );
  };

  return (
    <button
      className="button refresh-btn"
      onMouseDown={(e) => e.stopPropagation()}
      onClick={handleClick}
      data-testid="refresh-boundary"
    >
      Refresh cache
    </button>
  );
};

export default RefreshButton;
