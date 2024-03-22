import { useCallback, useState } from 'react';
import { DEFAULT_RECIPE, RECIPES, RecipeSlug, isRecipeSlug } from '../recipes';
import { Recipe } from '../types';

export const useRecipe = () => {
    const [slug, setSlug] = useState<RecipeSlug>(() => {
        const retrieved = localStorage.getItem('yeastRecipe');
        return isRecipeSlug(retrieved) ? retrieved : DEFAULT_RECIPE;
    });
    const [recipe, setRecipeLocal] = useState<Recipe>(RECIPES[slug]);

    const setRecipe = useCallback((slug: string) => {
        if (isRecipeSlug(slug)) {
            setSlug(slug);
            localStorage.setItem('yeastRecipe', slug);
            setRecipeLocal(RECIPES[slug]);
        }
    }, []);

    return { slug, recipe, setRecipe, knownRecipes: RECIPES };
};
