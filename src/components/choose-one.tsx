import React from "react";

type Props = {
  placeholder: string;
  choices: string[] | undefined;
  name: string;
  setUserInput: React.Dispatch<
    React.SetStateAction<{
      [k: string]: string;
    }>
  >;
};

function ChooseOne({ placeholder, choices, setUserInput, name }: Props) {
  if (!choices) throw new Error("Atleast one choice has to be given");
  if (!choices) return <></>;
  return (
    <div className="select2">
      <label>
        <input type="checkbox" name="placeholder" />
        <i className="toggle icon icon-plus"></i>
        <i className="toggle icon icon-minus"></i>
        <span className="placeholder">{placeholder}</span>
        {choices.map((choice, key) => (
          <label
            className="option"
            key={key}
            onClick={() =>
              setUserInput((prev) => {
                return { ...prev, [name]: choice };
              })
            }
          >
            <input type="radio" name="option" />
            <span className="title">{choice}</span>
          </label>
        ))}
      </label>
    </div>
  );
}

export default ChooseOne;
