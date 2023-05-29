import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import DataProvider from "./context/DataProvider";

const client = new ApolloClient({
  uri: "https://9x6bk78rn5.execute-api.us-east-1.amazonaws.com/",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <DataProvider>
      <RouterProvider router={routes} />
      </DataProvider>
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
