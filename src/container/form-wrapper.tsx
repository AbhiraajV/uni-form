import React from "react";

type Props = {
  children: React.ReactNode;
};

function FormWrapper({ children }: Props) {
  return (
    <div className="form-container" style={{ color: "white" }}>
      <div className="form-wrapper formBack">{children}</div>
    </div>
  );
}

export default FormWrapper;
