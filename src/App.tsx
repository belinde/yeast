import './App.css';
import { TimePlanner } from './components/TimePlanner/TimePlanner';
import { useRecipe } from './hooks/useRecipe';

function App() {
    const { slug, knownRecipes, recipe, setRecipe } = useRecipe();
    return (
        <>
            <select
                onChange={(evt) => {
                    setRecipe(evt.target.value);
                }}
            >
                {Object.entries(knownRecipes).map(([slug, info]) => (
                    <option value={slug} key={slug}>
                        {info.title}
                    </option>
                ))}
            </select>
            <TimePlanner recipe={recipe} slug={slug} />
        </>
    );
}

export default App;
