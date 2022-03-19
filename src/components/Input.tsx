import React from "react";
import ChooseOne from "./choose-one";

interface IconTypeProps {
  style: React.CSSProperties | undefined;
}
type IconStylesType = {
  width: string;
  height: string;
  color: string;
};
type IconType = (props: IconTypeProps) => JSX.Element;
type input = {
  icon?: {
    icon: IconType;
    iconStyle: IconStylesType;
  };
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
  choices?: string[];
};
export type inputs = input[];

type Props = {
  inputs: inputs;
  setUserInput: React.Dispatch<
    React.SetStateAction<{
      [k: string]: string;
    }>
  >;
  userInput: {
    [k: string]: string;
  };
};

function Input({ inputs, setUserInput, userInput }: Props) {
  const getStyle = (iconStyle: IconStylesType) => {
    return {
      style: {
        color: iconStyle.color,
        width: iconStyle.height,
        height: iconStyle.height,
      },
    };
  };
  return (
    <div className="flex flex-col gap-5">
      {inputs.map(
        ({ name, type, placeholder, icon, required, choices }, key) => (
          <div key={key} className="flex items-center justify-between gap-1">
            {icon && React.createElement(icon.icon, getStyle(icon.iconStyle))}

            {type !== "choice" ? (
              <input
                type={type}
                className="Input"
                placeholder={placeholder}
                value={userInput[name] ? userInput[name] : ""}
                onChange={(e) =>
                  setUserInput((prev) => {
                    return { ...prev, [name]: e.target.value };
                  })
                }
              />
            ) : (
              <ChooseOne
                placeholder={placeholder}
                choices={choices}
                setUserInput={setUserInput}
                name={name}
              />
            )}
            {required && (
              <h1 className="text-2xl font-semibold text-red-600">*</h1>
            )}
          </div>
        )
      )}
    </div>
  );
}

export default Input;
