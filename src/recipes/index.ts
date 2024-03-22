import colomba from './colomba';
import pandoro from './pandoro';

export const RECIPES = { colomba, pandoro } as const;

export type RecipeSlug = keyof typeof RECIPES;

export const DEFAULT_RECIPE: RecipeSlug = 'colomba';

export const isRecipeSlug = (slug: unknown): slug is RecipeSlug =>
    typeof slug === 'string' && slug in RECIPES;
