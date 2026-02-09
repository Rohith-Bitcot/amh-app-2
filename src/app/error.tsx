"use client";
import Error from "@/components/ui/Error";

interface ErrorsPropsType {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error, reset }: ErrorsPropsType) => {
  return <Error error={error} reset={reset} />;
};

export default ErrorPage;
