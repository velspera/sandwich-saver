import { Form } from '@remix-run/react';

function NewIngredient() {
    return (
        <div id="form-container" className="px-2">
            <Form method='post' id="ingredient-form">
                <h2 className="mb-2 text-xl text-midgreen">Add New Ingredient</h2>
                <div>
                    <label htmlFor='ingredient'>Ingredient</label>
                    <input type='text' id='ingredient' name='ingredient' />
                </div>
                <input type='submit' value='Add Ingredient' />
            </Form>
        </div>
    );
}

export default NewIngredient;