export const addCourse = (courseID, courseName) => {
  return {
    type: "ADD_COURSE",
    payload: {
      courseID: courseID,
      courseName: courseName,
    },
  };
};

export const deleteCourse = (id) => {
  return {
    type: "DELETE_COURSE",
    payload: {
      id: id,
    },
  };
};

// export const markCompleted = () => {
//   return {
//     type: "MARK_COMPLETED",
//   };
// };
