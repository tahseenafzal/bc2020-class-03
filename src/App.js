import React from "react";
import Student from "./Component/Student";

const App = () => {
  return (
    <div className="App">
      <Student
        name="Tehseen Afzal"
        title="Studnet"
        course="Bootcamp 2020"
        faculity="Sir Amir Pinger, Sir Muhammad Mohsin, Sir Bashir Ahmed and Sir Ameen Alam"
        managedBy="Panacloud"
        thanksTo="Sir Ziaullah Khan"
      />
    </div>
  );
};

export default App;
