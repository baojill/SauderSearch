import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

let lastID = 0;

function reducer(state = [], action) {
  switch (action.type) {
    case "ADD_COURSE":
      return [
        ...state,
        {
          id: ++lastID,
          courseID: action.payload.courseID,
          courseName: action.payload.courseName,
          completed: false,
        },
      ];

    case "DELETE_COURSE":
      return state.filter((course) => course.id !== action.payload.id);

    default:
      return state;
  }
}

// UI reducer

// export const addCourse = (courseId, courseName) => {
//   return {
//     type: "ADD_COURSE",
//     payload: {
//       courseId: courseId,
//       courseName: courseName,
//     },
//   };
// };

// export const deleteCourse = () => {
//   return {
//     type: "DELETE_COURSE",
//   };
// };

const store = createStore(reducer);
const baseUrl = process.env.BACKEND_URL;

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
