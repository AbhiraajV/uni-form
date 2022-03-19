import React from 'react';
import Form, { Forms } from './container/form';
import 'react-toastify/dist/ReactToastify.css';
type Props = {
  Forms: Forms;
  setOutput: React.Dispatch<React.SetStateAction<undefined>>;
};

function App({ Forms, setOutput }: Props) {
  return <Form forms={Forms} setOutput={setOutput} />;
}

export default App;
