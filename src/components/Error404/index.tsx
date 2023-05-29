import { useRouteError } from "react-router-dom";
import { ErrorPageWrapper, ErrorText } from "./styles";

export default function ErrorPage() {
  const error: any = useRouteError();
  return (
    <ErrorPageWrapper>
      <h1>Oops!</h1>
      <ErrorText>Sorry, an unexpected error has occurred.</ErrorText>
      <ErrorText>
        <i>{error.statusText || error.message}</i>
      </ErrorText>
    </ErrorPageWrapper>
  );
}