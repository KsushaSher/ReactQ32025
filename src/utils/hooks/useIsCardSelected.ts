import { useAppSelector } from '../../store/hooks';
import { selectIsSelected } from '../../store/selectors';

export const useIsCardSelected = (id: string) => {
  return useAppSelector((state) => selectIsSelected(state, id));
};
