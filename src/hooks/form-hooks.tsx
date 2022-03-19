import { useState } from 'react';

function FormHooks() {
  const [userInput, setUserInput] = useState<{ [k: string]: string }>({
    '': '',
  });
  return { userInput, setUserInput };
}

export default FormHooks;
