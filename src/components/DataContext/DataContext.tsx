import { createContext } from 'react';
import type { ResponseData } from '../../utils/hooks/get-co2-data';

const DEFAULT_DATA: ResponseData = {};

export const DataContext = createContext<ResponseData>(DEFAULT_DATA);
