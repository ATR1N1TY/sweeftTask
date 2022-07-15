import React from "react";

const Loading = (props: { loader: boolean }) => {
  const { loader } = props;

  return (
    <div
      className={`loadinganimation  ${
        loader ? " visible" : "invisible"
      }  flex items-center justify-center flex-row h-9 text-2xl m-4`}
    >
      <div className="pan pan1 bg-green-700 w-6 h-16 mr-2"></div>
      <div className="pan pan2 bg-green-700 w-6 h-16 mr-2"></div>
      <div className="pan pan3 bg-green-700 w-6 h-16"></div>
    </div>
  );
};

export default Loading;
