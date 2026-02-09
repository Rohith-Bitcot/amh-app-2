import React from "react";

interface ErrorsPropsType {
  error: Error;
  reset: () => void;
}

const Error = ({ error, reset }: ErrorsPropsType) => {
  return (
    <div className="space-y-5">
      <h1>{error.message}</h1>
      <button onClick={reset}>Try again</button>
    </div>
  );
};

export default Error;
