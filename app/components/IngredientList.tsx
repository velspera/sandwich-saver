import { useEffect } from 'react';

function IngredientList({ ingredientList, setIngredientList }) {
    useEffect(() => {
        const form = document.querySelector('#ingredient-form');

        function handleSubmit(event) {
            event.preventDefault();
            const input = document.querySelector('#ingredient');
            const text = input.value.trim();
            if (text !== '') {
                addIngredient(text);
                input.value = '';
                input.focus();
            }
        }

        if (form) {
            form.addEventListener('submit', handleSubmit);
        }

        return () => {
            if (form) {
                form.removeEventListener('submit', handleSubmit);
            }
        };
    }, []);

    function addIngredient(text: string) {
        const newIngredient = {
            text,
            id: Date.now(),
        };

        setIngredientList((prevList) => [...prevList, newIngredient]);
    }

    function deleteIngredient(id) {
        setIngredientList((prevList) => prevList.filter((ingredient) => ingredient.id !== id));
    }

    return (
        <div id="list-container" className="pt-1 pb-6 px-2">
            <h2 className="mb-1 text-xl text-midgreen">Ingredient List</h2>
            <ul id="ingredient-list" className="list-image-[url(./data/yum2.png)] list-inside">
                {ingredientList.map((ingredient) => (
                    <li key={ingredient.id}>{ingredient.text} <button onClick={() => deleteIngredient(ingredient.id)} className="delete-ingredient">X</button></li>
                ))}
            </ul>
        </div>
    );
}

export default IngredientList;
