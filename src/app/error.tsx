"use client";
import ErrorComponent from "@/components/ui/error-component";

interface ErrorsPropsType {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error, reset }: ErrorsPropsType) => {
  return <ErrorComponent error={error} reset={reset} />;
};

export default ErrorPage;
