import { Recipe } from '../types';
import colomba from './colomba';
import pandoro from './pandoro';

export const RECIPES: Record<string, Recipe> = { colomba, pandoro };
