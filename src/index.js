import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { eachDayOfInterval } from "date-fns";

// 👇 make it globally available for react-github-calendar
window.dateFns = { eachDayOfInterval };


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);



// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";

// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
