import { useEffect } from 'react';

function IngredientList({ ingredientList, setIngredientList }) {
    useEffect(() => {
        const form = document.querySelector('#ingredient-form');

        const handleSubmit = (event) => {
            event.preventDefault();
            const input = document.querySelector('#ingredient');
            const text = input.value.trim();
            if (text) {
                addIngredient(text);
                input.value = '';
                input.focus();
            }
        };

        if (form) {
            form.addEventListener('submit', handleSubmit);
        }

        return () => {
            if (form) {
                form.removeEventListener('submit', handleSubmit);
            }3
        };
    }, []);

    const addIngredient = (text) => {
        const newIngredient = { text, id: Date.now() };
        setIngredientList((prevList) => [...prevList, newIngredient]);
    };

    const deleteIngredient = (id) => {
        setIngredientList((prevList) => prevList.filter((ingredient) => ingredient.id !== id));
    };

    return (
        <div id="list-container" className="pt-1 pb-6 px-2">
            <h2 className="mb-1 text-xl text-midgreen font-lobster">Ingredient List</h2>
            <div className="bg-white border-4 border-cinerous border-double min-h-24 px-3 py-2">
                <ul id="ingredient-list" className="list-disc list-inside">
                    {ingredientList.map((ingredient) => (
                        <li key={ingredient.id}>
                            {ingredient.text}
                            <button onClick={() => deleteIngredient(ingredient.id)} className="ml-1 delete-ingredient bg-midgreen size-5 align-baseline text-white rounded-full leading-none text-center">
                                X
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default IngredientList;
