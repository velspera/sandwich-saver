import { Form } from '@remix-run/react';

function NewIngredient() {
    return (
        <div id="form-container" className="px-2 mt-4">
            <Form method='post' id="ingredient-form">
                <h2 className="mb-2 text-xl text-midgreen font-lobster">Add Ingredient</h2>
                <div>
                    <input type='text' id='ingredient' name='ingredient' className="border-4 border-double border-cinerous p-1" />
                </div>
                <input type='submit' value='Add to List' className="mt-2 bg-eggplant text-white rounded-md px-3 py-2" />
            </Form>
        </div>
    );
}

export default NewIngredient;