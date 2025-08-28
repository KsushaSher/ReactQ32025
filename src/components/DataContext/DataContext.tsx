import { createContext } from 'react';
import type { ResponseData } from '../../utils/hooks/getCO2Data';

const DEFAULT_DATA: ResponseData = {};

export const DataContext = createContext<ResponseData>(DEFAULT_DATA);
