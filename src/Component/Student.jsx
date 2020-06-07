import React from "react";

const Student = ({ name, title, course, faculity, managedBy, thanksTo }) => {
  return (
    <>
      <h1>Full Name: {name}</h1>
      <h2>Title: {title}</h2>
      <h2>Course: {course}</h2>
      <h2>Faculity: {faculity}</h2>
      <h2>Thanks To: {thanksTo}</h2>
      <h3>Managed by: {managedBy}</h3>
    </>
  );
};

export default Student;
