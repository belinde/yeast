import { useCallback, useState } from 'react';
import { RECIPES } from '../recipes';

export const useRecipe = () => {
    const [slug, setSlug] = useState(
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        () => localStorage.getItem('yeastRecipe') ?? Object.keys(RECIPES).pop()!
    );
    const [recipe, setRecipeLocal] = useState(RECIPES[slug]);

    const setRecipe = useCallback((slug: string) => {
        if (RECIPES[slug]) {
            setSlug(slug);
            localStorage.setItem('yeastRecipe', slug);
            setRecipeLocal(RECIPES[slug]);
        }
    }, []);

    return { slug, recipe, setRecipe, knownRecipes: RECIPES };
};
