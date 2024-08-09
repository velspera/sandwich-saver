import { useState} from 'react';
import DOMPurify from 'dompurify';

const SaverAI: React.FC<{ ingredientList: string[] }> = ({ ingredientList }) => {
  const [output, setOutput] = useState<string | null>(null); //create the output variable and set it to null to start

  //create a function to run the model
  const runModel = async () => {
    try {``
      //send a POST request to the our self-hosted Ollama instance with the model and prompt
      const response = await fetch('http://localhost:8000/api/generate', {
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
      //parse the response as JSON
      const data = await response.json();
      //set the output to the response from the model
      let answer = data.response;

      setOutput(answer);
    } catch (error) {
      console.error("Error running the model:", error);
      setOutput(`Error: ${error.message}`);
    }
  };

  //return the component
  return (
    <div>
      <div className="relative">
        <h2 className="text-3xl text-honeydew font-lobster">Recipe Generator</h2>
        <button className="absolute top-0 right-0 m-1 bg-engviolet text-white text-lg px-4 py-2 rounded-md" onClick={runModel}>Get Suggestions</button>
      </div>
      <div id="output-container" className="mt-7 mb-2 px-5 py-3 bg-white w-full min-h-60 rounded-sm">
        {output && (
          <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(output) }} />
      )}
      </div>
    </div>
  );
}

export default SaverAI;
