import { createContext } from 'react';
import type { ResponseData } from '../../models';

const DEFAULT_DATA: ResponseData = {};

export const DataContext = createContext<ResponseData>(DEFAULT_DATA);
