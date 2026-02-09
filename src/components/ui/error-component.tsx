import React from "react";

const ErrorComponent = ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) => {
  return <div>error-component</div>;
};

export default ErrorComponent;
