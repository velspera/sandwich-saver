import { useState } from 'react';
import type { MetaFunction } from '@remix-run/node';
import NewIngredient from '../components/AddIngredient';
import IngredientList from '../components/IngredientList';
import SaverAI from '../components/SaverAI';

export const meta: MetaFunction = () => {
  return [
    { title: "The Sandwich Saver" },
    { name: "The Sandwich Saver", content: "Remix your leftovers into something new!" },
  ];
};

export default function Index() {
  const [ingredientList, setIngredientList] = useState<{ text: string; id: number }[]>([]);

  return (
    <div className="font-sans p-4 md:flex">
      <div id="left-column" className="m-2 p-5">
        <IngredientList ingredientList={ingredientList} setIngredientList={setIngredientList} />
        <NewIngredient />
      </div>
      <div id="right-column" className="m-2 p-5 w-screen bg-cinerous/75">
        <SaverAI ingredientList={ingredientList.map(ingredient => ingredient.text)} />
      </div>
    </div>
  );
}
