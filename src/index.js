import "./index.css";
import { ThemeProvider } from "@material-ui/core/styles";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
import CssBaseline from "@material-ui/core/CssBaseline";
import React from "react";
import ReactDOM from "react-dom";
import SEO from "./SEO";
import theme from "./theme";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <CssBaseline />
      <SEO
        title="Labell | Nicholas Nadeau"
        image={process.env.PUBLIC_URL + "/logo512.png"}
        description="Enter text; get keywords, tags, and labels using natural language processing (NLP)"
        url="https://labell.now.sh/"
      />
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
