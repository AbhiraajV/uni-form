import React from "react";

type Props = {
  children: React.ReactNode;
};

function MainForm({ children }: Props) {
  return (
    <div className="mt-1 sm:mt-8">
      <form action="" className="flex-col flex justify-center items-center">
        {children}
      </form>
    </div>
  );
}

export default MainForm;
