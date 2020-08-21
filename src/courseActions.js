export const addCourse = (courseID, courseName) => {
  return {
    type: "ADD_COURSE",
    payload: {
      courseID,
      courseName,
    },
  };
};

export const deleteCourse = (id) => {
  return {
    type: "DELETE_COURSE",
    payload: {
      id,
    },
  };
};

// export const markCompleted = () => {
//   return {
//     type: "MARK_COMPLETED",
//   };
// };
