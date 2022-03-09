import ReactDOM from "react-dom";

import App from "./components/app";

const container = document.getElementById("root");
ReactDOM.hydrateRoot(container, <App />);