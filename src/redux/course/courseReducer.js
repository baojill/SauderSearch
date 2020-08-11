import { addCourse, deleteCourse, markCompleted } from "./courseActions";

const initialState = {
  worklist: [],
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_COURSE":
      return [
        ...state,
        {
          courseID: action.courseID,
          name: action.name,
          credits: action.credits,
          prereqs: {
            description: action.prereqs.description,
            courses: action.prereqs.courses,
          },
          corereqs: {
            description: action.corereqs.description,
            courses: action.corereqs.courses,
          },
          description: action.description,
          specialization: action.specialization,
          completed: false,
        },
      ];
    default:
      return state;

    case "DELETE_COURSE":
      return state.filter((course) => course.id !== action.id);
  }
};

export default courseReducer;
