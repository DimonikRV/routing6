import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorComponent = () => {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    console.log(error);
    if (error.status === 404) {
      return <h1>This page doesn't exist!</h1>;
    }

    if (error.status === 401) {
      return <h1>You aren't authorized to see this</h1>;
    }

    if (error.status === 503) {
      return <h1>Looks like our API is down</h1>;
    }

    if (error.status === 418) {
      return <h1>🫖</h1>;
    }
  }

  return (
    <>
      <h1>404</h1>
      <h2>Posts are not available!</h2>
    </>
  );
};

export default ErrorComponent;
