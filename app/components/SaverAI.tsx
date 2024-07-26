import { useState, useEffect } from 'react';
import DOMPurify from 'dompurify';

const SaverAI: React.FC<{ ingredientList: string[] }> = ({ ingredientList }) => {
  const [output, setOutput] = useState<string | null>(null);

  useEffect(() => {
    console.log("Current ingredient list in SaverAI:", ingredientList);
  }, [ingredientList]);

  const runModel = async () => {
    try {
      console.log("Running the model with ingredients:", ingredientList);

      const response = await fetch('http://vellama.flycast:80/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'llama3.1',
          prompt: `Take the following list of leftover sandwich ingredients and recommend recipes that can be cooked utilizing all ingredients. Please format your response as HTML. Do not include sandwiches in the recommended recipe list. Assume that all ingredients are pre-sliced as they typically would be on a sandwich. All ingredients must be used but do not have to be used in the same recipe. Please only recommend one recipe. Please assume the following portion sizes for each type of ingredient in the list: 3oz for meat, 2oz for cheese, 2oz for vegetables. Do NOT preface your response. For each individual recipe, please format included ingredients as a bulleted list and recipe instructions as a numbered list. If the recipes require any additional ingredients, please ensure they are included in the bulleted list. Here is your list of ingredients: ${ingredientList.join(', ')}`,
          stream: false
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      let answer = data.response;
      console.log(answer.length);

      setOutput(answer); // Set the parsed JSON result as output
    } catch (error) {
      console.error("Error running the model:", error);
      setOutput(`Error: ${error.message}`);
    }
  };

  return (
    <div className="">
      <div className="relative">
        <h2 className="text-2xl text-honeydew">Recipe Generator</h2>
        <button className="absolute top-0 right-0 m-1 bg-engviolet text-white px-4 py-2 rounded-md" onClick={runModel}>Get Suggestions</button>
      </div>
      <div id="output-container" className="mt-7 mb-2 px-5 py-3 bg-white w-full min-h-24">
        {output && (
          <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(output) }} />
      )}
      </div>
    </div>
  );
}

export default SaverAI;
