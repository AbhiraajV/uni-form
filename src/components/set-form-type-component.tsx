import React from 'react';
import { Forms } from '../container/form';
type Props = {
  forms: Forms;
  curForm: string;
  setCurForm: React.Dispatch<React.SetStateAction<string>>;
};

function SetFormTypeComponent({ forms, curForm, setCurForm }: Props) {
  if (forms.length == 1) return <h1>{curForm}</h1>;
  if (forms.length < 2) return <></>;
  return (
    <>
      {forms.map(({ title }, key) => (
        <div className="form-type-change-buttons-container" key={key}>
          <div
            className="box"
            onClick={() => {
              console.log(title);
              setCurForm(title);
            }}
          >
            <>
              <input id="one" type="checkbox" checked={curForm === title} />
              <span className="check"></span>
              <label htmlFor={title}>{title}</label>
            </>
          </div>
        </div>
      ))}
    </>
  );
}

export default SetFormTypeComponent;
