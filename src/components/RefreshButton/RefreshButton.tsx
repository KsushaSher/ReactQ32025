import { useDispatch } from 'react-redux';
import { charactersApi } from '../../store/charactersApi';

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
      Refresh store
    </button>
  );
};

export default RefreshButton;
