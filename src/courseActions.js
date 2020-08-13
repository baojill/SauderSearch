export const addCourse = (courseID, courseName) => {
  return {
    type: "ADD_COURSE",
    payload: {
      courseID: courseID,
      courseName: courseName,
    },
  };
};

export const deleteCourse = () => {
  return {
    type: "DELETE_COURSE",
  };
};

// export const markCompleted = () => {
//   return {
//     type: "MARK_COMPLETED",
//   };
// };
